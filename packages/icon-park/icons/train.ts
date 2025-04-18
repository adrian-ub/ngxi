import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTrainIcon],svg[icon-park-train-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="#000" stroke-linejoin="round" stroke-width="4" d="M9 8.83932C9 7.90724 9.43829 7.03279 10.2715 6.61502C12.2462 5.62486 16.6123 4 24 4C31.3877 4 35.7538 5.62486 37.7285 6.61502C38.5617 7.0328 39 7.90724 39 8.83932V36C39 37.1046 38.1046 38 37 38H11C9.89543 38 9 37.1046 9 36V8.83932Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M34 38V42"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M14 38V42"></svg:path><svg:path fill="#000" stroke="#000" d="M20.5 32C20.5 32.8284 19.8284 33.5 19 33.5C18.1716 33.5 17.5 32.8284 17.5 32C17.5 31.1716 18.1716 30.5 19 30.5C19.8284 30.5 20.5 31.1716 20.5 32Z"></svg:path><svg:path fill="#000" stroke="#000" d="M30.5 32C30.5 32.8284 29.8284 33.5 29 33.5C28.1716 33.5 27.5 32.8284 27.5 32C27.5 31.1716 28.1716 30.5 29 30.5C29.8284 30.5 30.5 31.1716 30.5 32Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M20 44L28 44"></svg:path><svg:rect width="30" height="14" x="9" y="12" fill="#2F88FF" stroke="#000" stroke-linejoin="round" stroke-width="4"></svg:rect><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M24 12V26"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M20 12L28 12"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M20 26L28 26"></svg:path></svg:g>`,
})
export class IconParkTrainIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
