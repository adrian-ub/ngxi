import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenNotesStroke16Icon],svg[garden-notes-stroke-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:path stroke-linejoin="round" d="m10.51 8.4l-3.01.1l.1-3.01L12.59.5l2.91 2.91z"></svg:path><svg:path stroke-linecap="round" d="M7.41 1.5H2.09a.58.58 0 0 0-.59.59v11.82a.58.58 0 0 0 .59.59h11.82a.58.58 0 0 0 .59-.59V8.59"></svg:path></svg:g>`,
})
export class GardenNotesStroke16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
