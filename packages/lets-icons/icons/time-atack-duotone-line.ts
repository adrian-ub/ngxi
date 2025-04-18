import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsTimeAtackDuotoneLineIcon],svg[lets-icons-time-atack-duotone-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="letsIconsTimeAtackDuotoneLine0" fill="#fff"><svg:path d="M12 6.5c0-.24 0-.359.08-.433c.082-.074.194-.065.42-.046a6 6 0 1 1-5.428 9.401c-.13-.186-.194-.279-.17-.386s.128-.166.335-.286l4.513-2.606c.122-.07.183-.105.216-.163c.034-.058.034-.129.034-.27z"></svg:path></svg:mask><svg:g fill="none" stroke="currentColor"><svg:path fill="currentColor" fill-opacity=".25" stroke-width="2.4" d="M12 6.5c0-.24 0-.359.08-.433c.082-.074.194-.065.42-.046a6 6 0 1 1-5.428 9.401c-.13-.186-.194-.279-.17-.386s.128-.166.335-.286l4.513-2.606c.122-.07.183-.105.216-.163c.034-.058.034-.129.034-.27z" mask="url(#letsIconsTimeAtackDuotoneLine0)"></svg:path><svg:circle cx="12" cy="12" r="8.4" stroke-width="1.2"></svg:circle></svg:g>`,
})
export class LetsIconsTimeAtackDuotoneLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
