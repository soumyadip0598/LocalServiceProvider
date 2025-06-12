
import React, { useState } from 'react';

const OrderTabs = ({ activeTab, setActiveTab, showPaymentStatusTab }) => {
  const tabs = [
    { id: 'new', label: 'New Orders' },
    { id: 'history', label: 'Order History' },
    ...(showPaymentStatusTab ? [{ id: 'payment-status', label: 'Payment Received' }] : [])
  ];

  return (
    <div className="border-b border-gray-200">
      <div className="flex space-x-8">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`
              py-4 px-1 border-b-2 font-medium text-sm
              ${activeTab === tab.id
                ? 'border-primary text-primary'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }
            `}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default OrderTabs;
