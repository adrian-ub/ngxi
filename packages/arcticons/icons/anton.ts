import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAntonIcon],svg[arcticons-anton-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M34.457 20.667a2.76 2.76 0 1 0-5.52 0v2.811a2.76 2.76 0 0 0 5.52 0zm-13.21-2.76h5.52m-2.76 8.331v-8.331m-10.951 8.331v-8.331l5.52 8.331v-8.331m19.404 8.331v-8.331l5.52 8.331v-8.331M9.105 23.479h-3.69M4.5 26.238l2.76-8.331l2.76 8.331"></svg:path><svg:circle cx="17.98" cy="12.864" r=".75" fill="currentColor"></svg:circle><svg:circle cx="30.27" cy="12.864" r=".75" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" d="M33.568 30.155a10.935 10.935 0 0 1-19.122.203"></svg:path>`,
})
export class ArcticonsAntonIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
