import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneStraightRazorIcon],svg[icon-park-twotone-straight-razor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTStraightRazor0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:rect width="38" height="6" x="3.609" y="36.534" fill="#555" rx="2" transform="rotate(-10 3.61 36.534)"></svg:rect><svg:path d="m44 40l-4-4"></svg:path><svg:path fill="#555" d="m8 4l18.385 18.385l-4.243 4.242L9.414 13.9c-2.828-2.83-2.828-4.243-2.828-5.657C6.586 6.828 8 4 8 4"></svg:path><svg:path d="m8 4l18 18l9 9"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTStraightRazor0)"></svg:path>`,
})
export class IconParkTwotoneStraightRazorIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
