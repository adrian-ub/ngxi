import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidEyebrowIcon],svg[icon-park-solid-eyebrow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSEyebrow0"><svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#fff" stroke="#fff" d="M24 40c9.941 0 18-10 18-10s-8.059-10-18-10S6 30 6 30s8.059 10 18 10Z"></svg:path><svg:path fill="#000" stroke="#000" d="M24 34a4 4 0 1 0 0-8a4 4 0 0 0 0 8Z"></svg:path><svg:path fill="#fff" stroke="#fff" d="M28 6c-7 0-18 3.5-21 6s-1 7 1 6s15.2-5.8 20-7s11.667.833 14 2c-2.333-2-7-7-14-7Z"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSEyebrow0)"></svg:path>`,
})
export class IconParkSolidEyebrowIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
