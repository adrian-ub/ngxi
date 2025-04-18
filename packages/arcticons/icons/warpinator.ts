import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsWarpinatorIcon],svg[arcticons-warpinator-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="21.443" cy="23.011" r="6.358" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="9.37" cy="8.049" r="3.049" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="11.114" cy="39.182" r="3.818" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="38.318" cy="21.688" r="3.36" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-dasharray="1 2" stroke-linecap="round" d="m11.476 10.802l5.772 7.299"></svg:path><svg:path fill="none" stroke="currentColor" stroke-dasharray="1 2" stroke-dashoffset="4.5" stroke-linecap="round" d="m27.67 22.586l6.096-.435"></svg:path><svg:path fill="none" stroke="currentColor" stroke-dasharray="1 2" stroke-linecap="round" d="m14.03 34.38l3.393-5.708"></svg:path>`,
})
export class ArcticonsWarpinatorIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
