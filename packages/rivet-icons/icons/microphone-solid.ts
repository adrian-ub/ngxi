import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[rivetIconsMicrophoneSolidIcon],svg[rivet-icons-microphone-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M5 3a3 3 0 0 1 6 0v4a3 3 0 0 1-6 0z"></svg:path><svg:path d="M8 11a4 4 0 0 1-4-4H2a6 6 0 0 0 5 5.917V14H5v2h6v-2H9v-1.083A6 6 0 0 0 14 7h-2a4 4 0 0 1-4 4"></svg:path></svg:g>`,
})
export class RivetIconsMicrophoneSolidIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
