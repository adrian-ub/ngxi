import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageDivideCircleIcon],svg[mage-divide-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke-width="1.5" d="M17.014 12H6.986"></svg:path><svg:path stroke-width="2.5" d="M11.995 15.894h.01m-.01-7.788h.01"></svg:path><svg:path stroke-width="1.5" d="M12 21.5a9.5 9.5 0 1 0 0-19a9.5 9.5 0 0 0 0 19"></svg:path></svg:g>`,
})
export class MageDivideCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
