import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatMicrophoneIcon],svg[fluent-emoji-flat-microphone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#533566" d="M22.525 17.94a7.47 7.47 0 1 0 0-14.94a7.47 7.47 0 0 0 0 14.94"></svg:path><svg:path fill="#9B9B9B" d="M2.644 29.21c-.83-.88-.86-2.25-.08-3.17l12.54-14.7l6.11 6.48l-15.41 11.66c-.96.73-2.33.61-3.16-.27"></svg:path><svg:path fill="#BEBEBE" d="m18.996 4.005l9.94 10.55c.66.7.63 1.8-.07 2.45c-.7.66-1.79.63-2.45-.07l-9.94-10.55c-.66-.7-.63-1.79.07-2.45s1.79-.63 2.45.07M15.415 18.53a1.47 1.47 0 1 1-2.94 0a1.47 1.47 0 0 1 2.94 0"></svg:path></svg:g>`,
})
export class FluentEmojiFlatMicrophoneIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
