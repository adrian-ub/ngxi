import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineRabbitZodiacIcon],svg[icon-park-outline-rabbit-zodiac-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M6 44V24c.167-1.667 1.2-6.8 6-10l-4-4c-2-2.452-.5-8 5-6c2 1 3 2.5 4.5 4l6.5 7c.667 1 2.5 2.809 2 7.452"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M16 25c5 0 15 3 18 11c.667 2.262 1.5 6 2 8"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M18 44c0-3.89 2.8-12.042 14-10.548"></svg:path><svg:circle cx="40.5" cy="41.452" r="2" fill="currentColor"></svg:circle></svg:g>`,
})
export class IconParkOutlineRabbitZodiacIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
