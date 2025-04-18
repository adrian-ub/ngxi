import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsVictronconnectIcon],svg[arcticons-victronconnect-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M27.8 28.414A11.65 11.65 0 1 1 13.107 17.17m7.155 1.211a11.65 11.65 0 1 1 15.553 12.157"></svg:path><svg:path fill="none" stroke="currentColor" d="m15.153 11.836l19.614 25.739M14.765 27.319l7.24-5.809"></svg:path><svg:circle cx="12.871" cy="28.686" r="2.288" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsVictronconnectIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
