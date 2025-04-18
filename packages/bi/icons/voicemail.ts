import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[biVoicemailIcon],svg[bi-voicemail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 8.5A3.5 3.5 0 0 1 5.95 11h4.1a3.5 3.5 0 1 1 2.45 1h-9A3.5 3.5 0 1 1 7 8.5m-6 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 0 0-5 0m14 0a2.5 2.5 0 1 0-5 0a2.5 2.5 0 0 0 5 0"></svg:path>`,
})
export class BiVoicemailIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
