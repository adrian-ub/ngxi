import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenSpeechBubbleLightningBoltFill12Icon],svg[garden-speech-bubble-lightning-bolt-fill-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 0H1C.45 0 0 .45 0 1v7c0 .55.45 1 1 1h1v2.29c0 .45.54.67.85.35L5.5 9H11c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1M7.88 4.27L4.71 7.72c-.25.22-.31.05-.23-.15L5.5 5h-.91c-.11 0-.16-.11-.11-.22l.96-2.58c.05-.11.18-.2.28-.2h2.02c.11 0 .16.09.12.2L6.83 4h1.04c.17 0 .18.11.01.27"></svg:path>`,
})
export class GardenSpeechBubbleLightningBoltFill12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
