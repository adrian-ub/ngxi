import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSnapdropIcon],svg[arcticons-snapdrop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.77 42.915a21.5 21.5 0 1 1 20.408.028"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" d="M31.506 38.227a16.125 16.125 0 1 0-15.012 0"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M28.826 33.582a10.75 10.75 0 1 0-9.652 0"></svg:path><svg:circle cx="24" cy="24" r="4.739" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsSnapdropIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
