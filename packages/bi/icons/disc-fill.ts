import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[biDiscFillIcon],svg[bi-disc-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-6 0a2 2 0 1 0-4 0a2 2 0 0 0 4 0M4 8a4 4 0 0 1 4-4a.5.5 0 0 0 0-1a5 5 0 0 0-5 5a.5.5 0 0 0 1 0m9 0a.5.5 0 1 0-1 0a4 4 0 0 1-4 4a.5.5 0 0 0 0 1a5 5 0 0 0 5-5"></svg:path>`,
})
export class BiDiscFillIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
