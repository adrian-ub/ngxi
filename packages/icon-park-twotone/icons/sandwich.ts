import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneSandwichIcon],svg[icon-park-twotone-sandwich-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTSandwich0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#555" d="M42 36V22H6v14a4 4 0 0 0 4 4h28a4 4 0 0 0 4-4"></svg:path><svg:path d="M6 30h36M6 26v8m36-8v8M6.067 22H42c0-2.016-11.807-10.582-17.967-14.613S12.74 8.9 8.633 13.937C5.348 17.97 6.067 19.986 6.067 22"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTSandwich0)"></svg:path>`,
})
export class IconParkTwotoneSandwichIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
