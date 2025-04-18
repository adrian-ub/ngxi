import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiMicrophonePlusIcon],svg[mdi-microphone-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 2a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3m7 9c0 3.5-2.56 6.43-6 6.93V21H8v-3.07c-3.44-.5-6-3.43-6-6.93h2a5 5 0 0 0 5 5a5 5 0 0 0 5-5zm-1-6h3V2h2v3h3v2h-3v3h-2V7h-3z"></svg:path>`,
})
export class MdiMicrophonePlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
