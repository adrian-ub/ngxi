import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSocialDealIcon],svg[arcticons-social-deal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M22.818 28.465c0 .694-.596 1.252-1.286 1.182c-6.358-.644-11.32-6.013-11.32-12.541s4.962-11.897 11.32-12.541c.69-.07 1.286.488 1.286 1.182zm2.364-8.93c0-.694.596-1.252 1.286-1.182c6.358.644 11.32 6.013 11.32 12.541s-4.962 11.897-11.32 12.541c-.69.07-1.286-.488-1.286-1.182z"></svg:path><svg:circle cx="16.515" cy="37.197" r="6.303" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="31.485" cy="10.803" r="6.303" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsSocialDealIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
