import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsResonaIcon],svg[arcticons-resona-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M29.347 34.088H8.282A3.777 3.777 0 0 1 4.5 30.307v-16.81a3.786 3.786 0 0 1 3.782-3.781H35.2a3.786 3.786 0 0 1 3.781 3.781v10.468"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.287 13.954h28.664v2.842H7.287zm0 5.805h7.196v5.745H7.287zm14.926 6.33h1.089m2.721 0h1.089"></svg:path><svg:circle cx="36.042" cy="30.826" r="7.458" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M36.042 34.596v-7.54m-3.77 3.77h7.539"></svg:path>`,
})
export class ArcticonsResonaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
