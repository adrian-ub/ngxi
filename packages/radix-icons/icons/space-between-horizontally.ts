import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[radixIconsSpaceBetweenHorizontallyIcon],svg[radix-icons-space-between-horizontally-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14.5 1a.5.5 0 0 0-.5.5V6h-4a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h4v4.5a.5.5 0 1 0 1 0v-12a.5.5 0 0 0-.5-.5M5 6H1V1.5a.5.5 0 0 0-1 0v12a.5.5 0 0 0 1 0V9h4a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1" clip-rule="evenodd"></svg:path>`,
})
export class RadixIconsSpaceBetweenHorizontallyIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
