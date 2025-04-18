import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneStretchingOneIcon],svg[icon-park-twotone-stretching-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTStretchingOne0"><svg:g fill="none" stroke="#fff" stroke-width="4"><svg:circle cx="24" cy="8" r="4" fill="#555"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="m41 8l-12 9.59V44M10.111 23.25L19 18v10.917L7 41"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTStretchingOne0)"></svg:path>`,
})
export class IconParkTwotoneStretchingOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
