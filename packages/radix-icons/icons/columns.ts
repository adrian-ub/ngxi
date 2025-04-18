import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[radixIconsColumnsIcon],svg[radix-icons-columns-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.15 14V1H.85v13zm4 0V1h-1.3v13zm4-13v13h-1.3V1zm4 13V1h-1.3v13z" clip-rule="evenodd"></svg:path>`,
})
export class RadixIconsColumnsIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
