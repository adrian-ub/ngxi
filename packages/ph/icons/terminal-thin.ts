import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phTerminalThinIcon],svg[ph-terminal-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M116 128a4 4 0 0 1-1.34 3l-72 64a4 4 0 1 1-5.32-6L106 128L37.34 67a4 4 0 0 1 5.32-6l72 64a4 4 0 0 1 1.34 3m100 60h-96a4 4 0 0 0 0 8h96a4 4 0 0 0 0-8"></svg:path>`,
})
export class PhTerminalThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
