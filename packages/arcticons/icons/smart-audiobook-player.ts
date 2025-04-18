import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSmartAudiobookPlayerIcon],svg[arcticons-smart-audiobook-player-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M35.274 24v18.182m-18.548 2.055v-9.279a2 2 0 0 1 1.12-1.796l16.868-8.264a1 1 0 0 0 0-1.796l-17.988-8.813"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m28.347 23.633l-10.224-4.42a1 1 0 0 0-1.397.919v7.736a1 1 0 0 0 1.397.918l10.224-4.419a.4.4 0 0 0 0-.734"></svg:path>`,
})
export class ArcticonsSmartAudiobookPlayerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
