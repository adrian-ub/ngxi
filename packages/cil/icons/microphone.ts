import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilMicrophoneIcon],svg[cil-microphone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 328a96.11 96.11 0 0 0 96-96V112a96 96 0 0 0-192 0v120a96.11 96.11 0 0 0 96 96m-64-216a64 64 0 0 1 128 0v120a64 64 0 0 1-128 0Z"></svg:path><svg:path fill="currentColor" d="M400 176v56c0 79.4-64.6 144-144 144s-144-64.6-144-144v-56H80v56c0 91.653 70.424 167.154 160 175.265V496h32v-88.735c89.576-8.111 160-83.612 160-175.265v-56Z"></svg:path>`,
})
export class CilMicrophoneIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
