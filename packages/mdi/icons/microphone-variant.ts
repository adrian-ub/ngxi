import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiMicrophoneVariantIcon],svg[mdi-microphone-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 3a4 4 0 0 1 4 4H5a4 4 0 0 1 4-4m2.84 6.82L11 18h-1v1a2 2 0 0 0 2 2a2 2 0 0 0 2-2v-5a4 4 0 0 1 4-4h2l-1 1l1 1h-2a2 2 0 0 0-2 2v5a4 4 0 0 1-4 4a4 4 0 0 1-4-4v-1H7l-.84-8.18C5.67 9.32 5.31 8.7 5.13 8h7.74c-.18.7-.54 1.32-1.03 1.82M9 11a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1a1 1 0 0 0-1-1"></svg:path>`,
})
export class MdiMicrophoneVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
