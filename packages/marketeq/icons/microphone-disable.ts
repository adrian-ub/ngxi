import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqMicrophoneDisableIcon],svg[marketeq-microphone-disable-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#306CFE" d="M31.25 43.75h-12.5M25 35.417a8.334 8.334 0 0 1-8.333-8.334v-12.5A8.333 8.333 0 0 1 25 6.25v0a8.333 8.333 0 0 1 8.333 8.333v12.5A8.333 8.333 0 0 1 25 35.417m0 0v8.333z"></svg:path><svg:path stroke="#344054" d="m8.333 8.333l33.334 33.334"></svg:path></svg:g>`,
})
export class MarketeqMicrophoneDisableIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
