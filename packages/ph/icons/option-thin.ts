import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phOptionThinIcon],svg[ph-option-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M228 192a4 4 0 0 1-4 4h-63.06a11.94 11.94 0 0 1-10.73-6.63L98.63 86.21A4 4 0 0 0 95.06 84H32a4 4 0 0 1 0-8h63.06a11.94 11.94 0 0 1 10.73 6.63l51.58 103.16a4 4 0 0 0 3.57 2.21H224a4 4 0 0 1 4 4M152 84h72a4 4 0 0 0 0-8h-72a4 4 0 0 0 0 8"></svg:path>`,
})
export class PhOptionThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
