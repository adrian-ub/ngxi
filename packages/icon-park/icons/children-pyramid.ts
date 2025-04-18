import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkChildrenPyramidIcon],svg[icon-park-children-pyramid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:rect width="18" height="8" x="15" y="17" fill="#2F88FF"></svg:rect><svg:path fill="#2F88FF" d="M10 25H38V33H10V25Z"></svg:path><svg:path fill="#2F88FF" d="M5 33H43V41H5V33Z"></svg:path><svg:path d="M24 17V7"></svg:path><svg:path d="M29 7L19 7"></svg:path></svg:g>`,
})
export class IconParkChildrenPyramidIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
