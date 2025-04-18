import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[biDiscIcon],svg[bi-disc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"></svg:path><svg:path d="M10 8a2 2 0 1 1-4 0a2 2 0 0 1 4 0M8 4a4 4 0 0 0-4 4a.5.5 0 0 1-1 0a5 5 0 0 1 5-5a.5.5 0 0 1 0 1m4.5 3.5a.5.5 0 0 1 .5.5a5 5 0 0 1-5 5a.5.5 0 0 1 0-1a4 4 0 0 0 4-4a.5.5 0 0 1 .5-.5"></svg:path></svg:g>`,
})
export class BiDiscIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
