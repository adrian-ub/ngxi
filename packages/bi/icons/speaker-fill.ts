import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[biSpeakerFillIcon],svg[bi-speaker-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M9 4a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-2.5 6.5a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0"></svg:path><svg:path d="M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm6 4a2 2 0 1 1-4 0a2 2 0 0 1 4 0M8 7a3.5 3.5 0 1 1 0 7a3.5 3.5 0 0 1 0-7"></svg:path></svg:g>`,
})
export class BiSpeakerFillIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
