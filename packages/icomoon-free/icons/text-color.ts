import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icomoonFreeTextColorIcon],svg[icomoon-free-text-color-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m5.032 13l.9-3h4.137l.9 3h1.775l-3-10H6.256l-3 10zm2.4-8h1.137l.9 3H6.532z"></svg:path>`,
})
export class IcomoonFreeTextColorIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
