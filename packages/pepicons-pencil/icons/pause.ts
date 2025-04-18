import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilPauseIcon],svg[pepicons-pencil-pause-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 14V6a1 1 0 0 0-2 0v8a1 1 0 1 0 2 0M7 4a2 2 0 0 0-2 2v8a2 2 0 1 0 4 0V6a2 2 0 0 0-2-2m7 10V6a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0M13 4a2 2 0 0 0-2 2v8a2 2 0 1 0 4 0V6a2 2 0 0 0-2-2" clip-rule="evenodd"></svg:path>`,
})
export class PepiconsPencilPauseIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
