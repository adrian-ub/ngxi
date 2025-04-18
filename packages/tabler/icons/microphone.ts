import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerMicrophoneIcon],svg[tabler-microphone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M9 5a3 3 0 0 1 3-3h0a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3h0a3 3 0 0 1-3-3z"></svg:path><svg:path d="M5 10a7 7 0 0 0 14 0M8 21h8m-4-4v4"></svg:path></svg:g>`,
})
export class TablerMicrophoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
