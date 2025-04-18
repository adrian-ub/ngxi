import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneKungfuIcon],svg[icon-park-twotone-kungfu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTKungfu0"><svg:g fill="none" stroke="#fff" stroke-miterlimit="2" stroke-width="4"><svg:path fill="#555" d="M11 17a5 5 0 1 0 0-10a5 5 0 0 0 0 10Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m20 18l8 6l-3 18m3-18l16-13"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M28 16.8L27 8l-7 10l-4 9l-6 3"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTKungfu0)"></svg:path>`,
})
export class IconParkTwotoneKungfuIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
