import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMediapartIcon],svg[arcticons-mediapart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="31.2" height="39" x="8.4" y="4.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1.95"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.48 9.38h9.2m-9.2 7.32h9.2m-9.2 7.31h9.2m-9.2 7.32h9.2m-9.2 7.31h9.2m4.61-29.26h9.21m-9.21 7.32h9.21m-9.21 7.31h9.21m-9.21 7.32h9.21m-9.21 7.31h9.21"></svg:path>`,
})
export class ArcticonsMediapartIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
