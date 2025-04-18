import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsBackspaceIcon],svg[proicons-backspace-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6.71 6.084a3.5 3.5 0 0 1 2.572-1.126h7.968a3.5 3.5 0 0 1 3.5 3.5v7.084a3.5 3.5 0 0 1-3.5 3.5H9.282a3.5 3.5 0 0 1-2.571-1.126l-3.27-3.542a3.5 3.5 0 0 1 0-4.748zm4.11 3.281l5.271 5.27m0-5.27l-5.27 5.27"></svg:path>`,
})
export class ProiconsBackspaceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
