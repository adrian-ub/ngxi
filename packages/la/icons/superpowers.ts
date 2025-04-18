import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laSuperpowersIcon],svg[la-superpowers-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M29 3L14.877 5.057l-.889.129l.014.005C8.888 6.135 5 10.618 5 16c0 3.032 1.235 5.782 3.227 7.773L3 29l14.123-2.057l.889-.129l-.014-.005C23.112 25.865 27 21.382 27 16a10.96 10.96 0 0 0-3.227-7.773zM16 7c4.963 0 9 4.037 9 9s-4.037 9-9 9s-9-4.037-9-9s4.037-9 9-9"></svg:path>`,
})
export class LaSuperpowersIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
