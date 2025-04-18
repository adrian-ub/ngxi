import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineStraightRazorIcon],svg[icon-park-outline-straight-razor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:rect width="38" height="6" x="3.609" y="36.534" rx="2" transform="rotate(-10 3.61 36.534)"></svg:rect><svg:path d="m44 40l-4-4M8 4l18.385 18.385l-4.243 4.242L9.414 13.9c-2.828-2.83-2.828-4.243-2.828-5.657C6.586 6.828 8 4 8 4m0 0l18 18l9 9"></svg:path></svg:g>`,
})
export class IconParkOutlineStraightRazorIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
