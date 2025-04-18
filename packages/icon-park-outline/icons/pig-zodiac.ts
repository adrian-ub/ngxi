import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlinePigZodiacIcon],svg[icon-park-outline-pig-zodiac-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="4"><svg:path stroke-linejoin="round" d="M13 27c2.073-.542 6.014-3.167 7-4v-7l-6-2c-.41-1.62-1.685-4.889-3-6l-1.448 4.514C6.95 13.67 2.7 18.889 5 25c1 2 3.077 9 6 14m13-25.794c4.391-.727 13.525.072 14.93 9.08c.292 1.332-.176 7.723-4.391 10.629C33.689 33.5 33 36 33 39"></svg:path><svg:path d="M26 40a4 4 0 0 0-8 0"></svg:path><svg:path stroke-linejoin="round" d="M39 24c.5 1 2.699 1.67 4.228.102c.89-.913 1.619-3.768-.63-5.102"></svg:path></svg:g>`,
})
export class IconParkOutlinePigZodiacIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
