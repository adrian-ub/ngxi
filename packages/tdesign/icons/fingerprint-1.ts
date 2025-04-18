import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignFingerprint1Icon],svg[tdesign-fingerprint-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10v9h-2v-9a8 8 0 1 0-16 0v9H2zm4.5 0a5.5 5.5 0 1 1 11 0v9h-2v-9a3.5 3.5 0 1 0-7 0v9h-2zm6.5-1v10h-2V11z"></svg:path>`,
})
export class TdesignFingerprint1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
