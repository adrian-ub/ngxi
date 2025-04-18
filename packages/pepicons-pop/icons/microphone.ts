import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopMicrophoneIcon],svg[pepicons-pop-microphone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M7.5 4.5a2.5 2.5 0 0 1 5 0v4a2.5 2.5 0 0 1-5 0z" clip-rule="evenodd"></svg:path><svg:path d="M10 18.5c-2.834 0-4.5-.208-4.5-1s1.666-1 4.5-1s4.5.208 4.5 1s-1.666 1-4.5 1"></svg:path><svg:path d="M9.036 13.5h2V18h-2z"></svg:path><svg:path d="M14 8a1 1 0 1 1 2 0v1.8c0 2.914-2.721 5.2-6 5.2s-6-2.286-6-5.2V8a1 1 0 0 1 2 0v1.8c0 1.725 1.756 3.2 4 3.2s4-1.475 4-3.2z"></svg:path></svg:g>`,
})
export class PepiconsPopMicrophoneIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
