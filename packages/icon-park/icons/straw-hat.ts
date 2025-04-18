import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkStrawHatIcon],svg[icon-park-straw-hat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path d="M34 22C34 16.4772 29.5228 12 24 12C18.4772 12 14 16.4772 14 22"></svg:path><svg:path d="M14 23C8.02199 24.2044 4 26.4557 4 29.034C4 32.8812 12.9543 36 24 36C35.0457 36 44 32.8812 44 29.034C44 26.4557 39.978 24.2044 34 23"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M14 22C15 22.8333 18 26 24 26C30 26 33 23 34 22"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M19 25L21 20"></svg:path></svg:g>`,
})
export class IconParkStrawHatIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
