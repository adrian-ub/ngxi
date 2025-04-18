import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedTriasIcon],svg[token-branded-trias-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedTrias0)" fill-rule="evenodd" d="M13.396 3.085a.42.42 0 0 0-.563.053L3.65 13.756a.35.35 0 0 0 .076.527l9.847 6.647c.15.101.357.092.497-.023l6.235-5.163a.35.35 0 0 0 .118-.373L17.74 6.443zm-8.95 10.73l9.645.873l.695-6.262l-1.832-4.449zm9.578 1.482l-8.865-.803l8.33 5.622zm.656.059l4.6.416l-5.115 4.236zm5.004-.162l-4.936-.447l.675-6.085l1.836-1.541zm-2.781-8.6l-1.609 1.35l-1.568-3.806z" clip-rule="evenodd"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedTrias0" x1="5.634" x2="16.474" y1="4.44" y2="16.349" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#79DCE5"></svg:stop><svg:stop offset=".807" stop-color="#12ABA9"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedTriasIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
