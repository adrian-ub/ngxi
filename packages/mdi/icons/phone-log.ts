import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiPhoneLogIcon],svg[mdi-phone-log-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 15.5a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.24.2 2.45.57 3.57c.11.35.03.74-.25 1.01l-2.2 2.21c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.28-.28.67-.36 1.02-.25c1.12.37 2.32.57 3.57.57M12 3h2v2h-2m3-2h6v2h-6m-3 1h2v2h-2m3-2h6v2h-6m-3 1h2v2h-2m3-2h6v2h-6"></svg:path>`,
})
export class MdiPhoneLogIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
