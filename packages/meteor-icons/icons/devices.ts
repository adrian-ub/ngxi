import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[meteorIconsDevicesIcon],svg[meteor-icons-devices-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M1 19h12m0-3H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v3"></svg:path><svg:rect width="6" height="10" x="17" y="12" rx="2"></svg:rect></svg:g>`,
})
export class MeteorIconsDevicesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
