import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faSolidMittenIcon],svg[fa-solid-mitten-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M368 416H48c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16h320c8.8 0 16-7.2 16-16v-64c0-8.8-7.2-16-16-16m57-209.1c-27.2-22.6-67.5-19-90.1 8.2l-20.9 25l-29.6-128.4c-18-77.5-95.4-125.9-172.8-108S-14.2 98.9 3.7 176.4L51.6 384h309l72.5-87c22.7-27.2 19-67.5-8.1-90.1"></svg:path>`,
})
export class FaSolidMittenIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}
