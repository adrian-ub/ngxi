import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineTallHatIcon],svg[streamline-tall-hat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M.5 13.5h13m-9.5 0L2.629 1.615A1 1 0 0 1 3.622.5h6.756a1 1 0 0 1 .993 1.115L10 13.5m-6.46-4h6.92"></svg:path>`,
})
export class StreamlineTallHatIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
