import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsDefikatasterIcon],svg[arcticons-defikataster-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21.1 42.5C-5.113 28.542 9.192 7.999 20.823 17.904c11.63-9.906 26.585 10.498.37 24.455"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m24.934 18.915l-7.994 9.814h4.647l-3.346 8.425l8.32-10.315l-4.304-.14zM37.04 5.5v9.295m4.648-4.647h-9.295"></svg:path>`,
})
export class ArcticonsDefikatasterIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
