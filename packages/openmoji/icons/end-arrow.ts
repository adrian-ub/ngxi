import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiEndArrowIcon],svg[openmoji-end-arrow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#3f3f3f" d="M56.25 31.81v-6.134H28.41v-8.433l-12.66 11.5l12.66 11.5V31.81z"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M56.25 31.81H28.41v8.433l-12.66-11.5l12.66-11.5v8.433h27.84zM28.52 44.7h-5.714v10h5.714m-5.71-5h4.286M33 54.75v-10l7.143 10v-10m4.917-.07h4.383a2.08 2.08 0 0 1 2.08 2.08v5.841a2.08 2.08 0 0 1-2.08 2.08H45.06z"></svg:path>`,
})
export class OpenmojiEndArrowIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
