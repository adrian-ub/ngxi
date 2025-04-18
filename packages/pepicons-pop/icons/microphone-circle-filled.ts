import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopMicrophoneCircleFilledIcon],svg[pepicons-pop-microphone-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPopMicrophoneCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000"><svg:path fill-rule="evenodd" d="M10.5 7.5a2.5 2.5 0 0 1 5 0v4a2.5 2.5 0 0 1-5 0z" clip-rule="evenodd"></svg:path><svg:path d="M13 21.5c-2.834 0-4.5-.208-4.5-1s1.666-1 4.5-1s4.5.208 4.5 1s-1.666 1-4.5 1"></svg:path><svg:path d="M12.036 16.5h2V21h-2z"></svg:path><svg:path d="M17 11a1 1 0 1 1 2 0v1.8c0 2.914-2.721 5.2-6 5.2s-6-2.286-6-5.2V11a1 1 0 0 1 2 0v1.8c0 1.725 1.756 3.2 4 3.2s4-1.475 4-3.2z"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPopMicrophoneCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPopMicrophoneCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}
