import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiGateBufferIcon],svg[mdi-gate-buffer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 7.24L15.53 12L6 16.76zM4 4v16l16-8z"></svg:path>`,
})
export class MdiGateBufferIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
