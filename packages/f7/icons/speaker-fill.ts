import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[f7SpeakerFillIcon],svg[f7-speaker-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M39.73 49.504c1.594 0 2.743-1.172 2.743-2.742V9.379c0-1.57-1.149-2.883-2.79-2.883c-1.148 0-1.921.516-3.163 1.688l-10.336 9.773a.92.92 0 0 1-.61.211h-6.96c-3.305 0-5.087 1.805-5.087 5.32v9.094c0 3.516 1.782 5.32 5.086 5.32h6.961c.235 0 .445.07.61.211l10.336 9.868c1.124 1.054 2.062 1.523 3.21 1.523"></svg:path>`,
})
export class F7SpeakerFillIcon {
  readonly viewBox = input("0 0 56 56")
  readonly width = input("1em")
  readonly height = input("1em")
}
