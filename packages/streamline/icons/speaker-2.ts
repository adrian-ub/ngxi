import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineSpeaker2Icon],svg[streamline-speaker-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M11 .5H3a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-11a1 1 0 0 0-1-1"></svg:path><svg:path d="M7 11.5a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5"></svg:path><svg:path d="M7 9.25a.25.25 0 0 1 0-.5m0 .5a.25.25 0 0 0 0-.5m0-4.875a.375.375 0 1 1 0-.75m0 .75a.375.375 0 1 0 0-.75"></svg:path></svg:g>`,
})
export class StreamlineSpeaker2Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
