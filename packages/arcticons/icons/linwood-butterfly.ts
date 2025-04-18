import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsLinwoodButterflyIcon],svg[arcticons-linwood-butterfly-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m20.294 27.034l6.496-4.318l-3.087 6.239l4.438 3.257l4.116-14.465l-16.301 6.168z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.294 27.034v7.204l3.409-5.283"></svg:path><svg:circle cx="10.16" cy="12.088" r="3" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 38.13h6.912a9.176 9.176 0 0 0 9.176-9.175v-5.868a9.12 9.12 0 0 0-1.761-5.389a5.682 5.682 0 1 0-5.771-3.631a9 9 0 0 0-1.644-.155H17.088a9 9 0 0 0-1.644.155a5.655 5.655 0 1 0-5.771 3.631a9.12 9.12 0 0 0-1.76 5.39v5.867a9.176 9.176 0 0 0 9.175 9.176Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M40.088 28.955v3.441a9.176 9.176 0 0 1-9.176 9.176H17.088a9.176 9.176 0 0 1-9.176-9.176v-3.44"></svg:path><svg:circle cx="37.84" cy="12.088" r="3" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="37.84" cy="12.088" r=".75" fill="currentColor"></svg:circle><svg:circle cx="10.16" cy="12.088" r=".75" fill="currentColor"></svg:circle>`,
})
export class ArcticonsLinwoodButterflyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
