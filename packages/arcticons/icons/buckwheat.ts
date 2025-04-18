import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsBuckwheatIcon],svg[arcticons-buckwheat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.366 5.5S-6.241 15.648 9.757 32.142C28.017 50.967 50.24 45.305 38.366 5.5"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.371 5.57c-4.418 18.053-6.16 30.307-19.218 33.913"></svg:path>`,
})
export class ArcticonsBuckwheatIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
