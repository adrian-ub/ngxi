import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneListCheckboxIcon],svg[icon-park-twotone-list-checkbox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTListCheckbox0"><svg:g fill="none"><svg:path fill="#555" fill-rule="evenodd" d="M20 24h24z" clip-rule="evenodd"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M20 24h24"></svg:path><svg:path fill="#555" fill-rule="evenodd" d="M20 38h24z" clip-rule="evenodd"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M20 38h24"></svg:path><svg:path fill="#555" fill-rule="evenodd" d="M20 10h24z" clip-rule="evenodd"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M20 10h24"></svg:path><svg:path fill="#555" stroke="#fff" stroke-linejoin="round" stroke-width="4" d="M4 34h8v8H4zm0-14h8v8H4zM4 6h8v8H4z"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTListCheckbox0)"></svg:path>`,
})
export class IconParkTwotoneListCheckboxIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
