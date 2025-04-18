import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonPhoneIpIcon],svg[carbon-phone-ip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 14h2v2h-2zm4 0h2v2h-2zm4 0h2v2h-2zm-8 4h2v2h-2zm4 0h2v2h-2zm4 0h2v2h-2zm-8 4h2v2h-2zm4 0h2v2h-2zm4 0h2v2h-2zm-8-12h10v2H16z"></svg:path><svg:path fill="currentColor" d="M28 6H14V5a2.003 2.003 0 0 0-2-2H8a2.003 2.003 0 0 0-2 2v1H4a2.003 2.003 0 0 0-2 2v18a2.003 2.003 0 0 0 2 2h24a2.003 2.003 0 0 0 2-2V8a2.003 2.003 0 0 0-2-2M8 5h4v17H8Zm20 21H4V8h2v14a2.003 2.003 0 0 0 2 2h4a2.003 2.003 0 0 0 2-2V8h14Z"></svg:path>`,
})
export class CarbonPhoneIpIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
