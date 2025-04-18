import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMarkushiexpensemanagerIcon],svg[arcticons-markushiexpensemanager-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.961 13.065h7.518v21.87H6.961zm13.832 5.467h7.518v16.402h-7.518zm14.201 8.885h7.518v7.518h-7.518z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m4.5 34.924l14.294-11.49L31.27 27.93l12.23-9.427"></svg:path>`,
})
export class ArcticonsMarkushiexpensemanagerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
