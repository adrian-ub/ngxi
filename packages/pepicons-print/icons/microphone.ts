import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPrintMicrophoneIcon],svg[pepicons-print-microphone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M11.5 2.5A2.5 2.5 0 0 0 9 5v4a2.5 2.5 0 0 0 5 0V5a2.5 2.5 0 0 0-2.5-2.5M7 18c0 .792 1.666 1 4.5 1s4.5-.208 4.5-1c0-.69-1.264-.937-3.464-.989v-1.588C15.333 15 17.5 12.9 17.5 10.3V8.5a1 1 0 1 0-2 0v1.8c0 1.725-1.756 3.2-4 3.2s-4-1.475-4-3.2V8.5a1 1 0 0 0-2 0v1.8c0 2.623 2.204 4.737 5.036 5.133v1.576C8.292 17.059 7 17.304 7 18" clip-rule="evenodd" opacity=".2"></svg:path><svg:path fill-rule="evenodd" d="M7.75 4.25a2.25 2.25 0 0 1 4.5 0v3.5a2.25 2.25 0 0 1-4.5 0z" clip-rule="evenodd"></svg:path><svg:path d="M10 17c-2.48 0-4-.217-4-1s1.52-1 4-1s4 .217 4 1s-1.52 1-4 1"></svg:path><svg:path d="M9.5 12.5h1V16h-1z"></svg:path><svg:path d="M14 7.5a.5.5 0 0 1 1 0v1.65c0 2.421-2.254 4.35-5 4.35s-5-1.929-5-4.35V7.5a.5.5 0 0 1 1 0v1.65c0 1.831 1.775 3.35 4 3.35s4-1.519 4-3.35z"></svg:path></svg:g>`,
})
export class PepiconsPrintMicrophoneIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
