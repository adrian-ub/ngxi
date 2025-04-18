import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkIncreaseTheScaleIcon],svg[icon-park-increase-the-scale-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path d="M24 9C24 6.23858 21.7614 4 19 4C16.2386 4 14 6.23858 14 9V19C14 21.7614 16.2386 24 19 24C21.7614 24 24 21.7614 24 19V9Z"></svg:path><svg:path d="M42 9C42 6.23858 39.7614 4 37 4C34.2386 4 32 6.23858 32 9V19C32 21.7614 34.2386 24 37 24C39.7614 24 42 21.7614 42 19V9Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M36 32L42 38L36 44"></svg:path><svg:path stroke-linecap="round" d="M6 24H7"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M42 38H19"></svg:path></svg:g>`,
})
export class IconParkIncreaseTheScaleIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
