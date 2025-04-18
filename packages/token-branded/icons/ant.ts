import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedAntIcon],svg[token-branded-ant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedAnt0)" fill-rule="evenodd" d="M8.108 4.77a6.6 6.6 0 0 1 2.588-.547l-.86-.878s3.461-.596 7.885 2.157c0 0 .064.141 0 .542c0 0 2.097.933 2.264 2.731c.18 1.8-.921 2.83-1.813 2.97c0 0 .461-.737-.252-1.138a.93.93 0 0 0-.513-.108c-1.363 0-1.52 1.593-1.52 1.593c.052 2.526 4.099 2.526 5.113 2.526c-.86 3.345-4.739 6.091-8.606 6.091c-3.6 0-9.394-2.577-9.394-8.801c0-1.983 1.573-5.604 5.108-7.139m8.313 1.09c-.22.228-.41.325-.461.358l-.021.01c-1.248-.281-1.698-.932-1.698-.932a5.7 5.7 0 0 1 3.019.76s-.42-.142-.839-.196" clip-rule="evenodd"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedAnt0" x1="12" x2="12" y1="3.291" y2="20.709" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#02E8F7"></svg:stop><svg:stop offset="1" stop-color="#03CCFD"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedAntIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
