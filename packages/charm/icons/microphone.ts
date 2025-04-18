import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[charmMicrophoneIcon],svg[charm-microphone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M8 1.75c-2.25 0-2.25 2-2.25 3v1.5c0 1 0 3 2.25 3s2.25-2 2.25-3v-1.5c0-1 0-3-2.25-3"></svg:path><svg:path d="M8 13v1.25m-5.25-6.5s0 4.5 5.25 4.508s5.25-4.508 5.25-4.508"></svg:path></svg:g>`,
})
export class CharmMicrophoneIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
