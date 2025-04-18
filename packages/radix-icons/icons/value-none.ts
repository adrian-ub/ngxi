import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[radixIconsValueNoneIcon],svg[radix-icons-value-none-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.5.877a6.623 6.623 0 0 0-5.023 10.94l-.83.83a.5.5 0 1 0 .707.707l.83-.83a6.623 6.623 0 0 0 9.34-9.34l.83-.83a.5.5 0 1 0-.708-.708l-.83.83A6.6 6.6 0 0 0 7.5.878m3.642 2.274a5.673 5.673 0 0 0-7.992 7.992zM3.858 11.85a5.673 5.673 0 0 0 7.992-7.992z" clip-rule="evenodd"></svg:path>`,
})
export class RadixIconsValueNoneIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
