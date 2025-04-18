import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneFourPointConnectionIcon],svg[icon-park-twotone-four-point-connection-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTFourPointConnection0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M8 28v12h12m8 0h12V28m0-8V8H28m-8 0H8v12"></svg:path><svg:path fill="#555" d="M44 20h-8v8h8zm-32 0H4v8h8zm16 16h-8v8h8zm0-32h-8v8h8z"></svg:path><svg:path d="M24 18v12m-6-6h12M28 8l12 12M20 8L8 20m12 20L8 28m32 0L29 40"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTFourPointConnection0)"></svg:path>`,
})
export class IconParkTwotoneFourPointConnectionIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
