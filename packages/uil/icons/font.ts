import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uilFontIcon],svg[uil-font-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 20h-1V3a1 1 0 0 0-1-1h-3.5a1 1 0 0 0-.86.5L4.43 20H3a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2h-.26l3.5-6H18v6h-1a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2m-3-8h-6.59l4.66-8H18Z"></svg:path>`,
})
export class UilFontIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
