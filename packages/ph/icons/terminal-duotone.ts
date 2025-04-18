import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phTerminalDuotoneIcon],svg[ph-terminal-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 80v112H40V64h160a16 16 0 0 1 16 16" opacity=".2"></svg:path><svg:path d="m117.31 134l-72 64a8 8 0 1 1-10.63-12L100 128L34.69 70a8 8 0 1 1 10.63-12l72 64a8 8 0 0 1 0 12ZM216 184h-96a8 8 0 0 0 0 16h96a8 8 0 0 0 0-16"></svg:path></svg:g>`,
})
export class PhTerminalDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
