import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineWindowsIcon],svg[streamline-windows-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m.94 2l12-1.38a.49.49 0 0 1 .56.49v11.82a.5.5 0 0 1-.58.49l-12-1.84a.51.51 0 0 1-.42-.5V2.46A.5.5 0 0 1 .94 2M6 1.38v10.98m7.5-5.6H.5"></svg:path>`,
})
export class StreamlineWindowsIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
