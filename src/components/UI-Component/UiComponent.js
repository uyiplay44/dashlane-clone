import React from 'react'
import './uicomponent.css'
import { HiOutlineLightBulb} from 'react-icons/hi';
import { AiOutlineUser, AiOutlineEye} from 'react-icons/ai';
import { MdSecurity} from 'react-icons/md';

function UiComponent() {
  return (
    <div className='ui-component'>
      <div className='ui-component-container'>
        <div className='ui-component-head'>
          <h2>What do you get with dashlane business?</h2>
          <p>Security-first password manager that employees love to use</p>
          <p>Never been breached. Never see your data. Simple to deploy. Easy to terminate.</p>
        </div>

        <div className="ui-component-main">
          <div className=''>
            <HiOutlineLightBulb className='ui-icon' />
            <h4>Always private, always secure</h4>
            <p>Our patented zero-knowledge architecture ensures that we never see your data. And if you stop using Dashlane, you’ll take your organization's data with you.</p>
          </div>
          <div className=''>
            <AiOutlineUser className='ui-icon' />
          <h4>Simple to deploy, easy to Use</h4>
          <p>Dashlane continuously scans 20+ billion breach and hack records to ensure no threat goes undetected, and 2-factor authentication offers an additional layer of protection.</p>
          </div>
          <div className=''>
            <MdSecurity className='ui-icon'/>
            <h4>Complete end-to-end protection</h4>
            <p>Leverage SCIM + SSO integration for quick deployment and simple user provisioning. Increase productivity with password sharing in an award-winning UX that employees love.</p>
          </div>
          <div className=''>
            <AiOutlineEye className='ui-icon'/>
            <h4>Proactive monitoring and remediation</h4>
            <p>Simple remediation tools empower admins to proactively discover risky behavior and alert employees on breached and hacked accounts.</p>
          </div>
        </div>
        <div className='ui-btn-btn'>
        <button className='btn-btn-1'>Try Dashlane for free</button>
        <button className='btn-btn-2'>Business Password Manager</button>
        </div>
      </div>
    </div>
  )
}

export default UiComponent
