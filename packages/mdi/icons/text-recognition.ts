import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiTextRecognitionIcon],svg[mdi-text-recognition-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 4c0-1.1.9-2 2-2h4v2H4v4H2zm20 16c0 1.11-.89 2-2 2h-4v-2h4v-4h2zM4 22a2 2 0 0 1-2-2v-4h2v4h4v2zM20 2a2 2 0 0 1 2 2v4h-2V4h-4V2zM9 7v2h2v8h2V9h2V7z"></svg:path>`,
})
export class MdiTextRecognitionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
