import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[feFileAudioIcon],svg[fe-file-audio-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6 2h10l4 4v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2m9.172 2H6v16h12V6.828h-2.828zM15 14.085V11h-4v5.5a1.5 1.5 0 1 1-1-1.415V10a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v5.5a1.5 1.5 0 1 1-1-1.415"></svg:path>`,
})
export class FeFileAudioIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
