import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneIcecreamFiveIcon],svg[icon-park-twotone-icecream-five-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTIcecreamFive0"><svg:g fill="none" stroke="#fff" stroke-width="4"><svg:path fill="#555" d="M14 14c0-5.523 4.477-10 10-10s10 4.477 10 10v17.73a.27.27 0 0 1-.27.27H14.27a.27.27 0 0 1-.27-.27z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M21 16v6m6-6v6m-6 10v9a3 3 0 1 0 6 0v-9"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTIcecreamFive0)"></svg:path>`,
})
export class IconParkTwotoneIcecreamFiveIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
