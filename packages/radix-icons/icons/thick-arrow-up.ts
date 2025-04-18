import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[radixIconsThickArrowUpIcon],svg[radix-icons-thick-arrow-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.5 1a.5.5 0 0 1 .407.21l5 7A.5.5 0 0 1 12.5 9H10v2.5a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5V9H2.5a.5.5 0 0 1-.407-.79l5-7A.5.5 0 0 1 7.5 1M3.472 8H5.5a.5.5 0 0 1 .5.5V11h3V8.5a.5.5 0 0 1 .5-.5h2.028L7.5 2.36z" clip-rule="evenodd"></svg:path>`,
})
export class RadixIconsThickArrowUpIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
