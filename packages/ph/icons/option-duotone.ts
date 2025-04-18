import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phOptionDuotoneIcon],svg[ph-option-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 80v112H48a16 16 0 0 1-16-16V80Z" opacity=".2"></svg:path><svg:path d="M232 192a8 8 0 0 1-8 8h-63.06a15.92 15.92 0 0 1-14.31-8.84L95.06 88H32a8 8 0 0 1 0-16h63.06a15.92 15.92 0 0 1 14.31 8.84L160.94 184H224a8 8 0 0 1 8 8M152 88h72a8 8 0 0 0 0-16h-72a8 8 0 0 0 0 16"></svg:path></svg:g>`,
})
export class PhOptionDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
