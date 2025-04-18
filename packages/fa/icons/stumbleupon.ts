import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faStumbleuponIcon],svg[fa-stumbleupon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1062 552V434q0-42-30-72t-72-30t-72 30t-30 72v612q0 175-126 299t-303 124q-178 0-303.5-125.5T0 1040V774h328v262q0 43 30 72.5t72 29.5t72-29.5t30-72.5V416q0-171 126.5-292T960 3q176 0 302 122t126 294v136l-195 58zm530 222h328v266q0 178-125.5 303.5T1491 1469q-177 0-303-124.5T1062 1044V776l131 61l195-58v270q0 42 30 71.5t72 29.5t72-29.5t30-71.5z"></svg:path>`,
})
export class FaStumbleuponIcon {
  readonly viewBox = input("0 0 1920 1472")
  readonly width = input("1.31em")
  readonly height = input("1em")
}
