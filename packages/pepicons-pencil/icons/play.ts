import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilPlayIcon],svg[pepicons-pencil-play-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m6 15.321l9.014-4.883L6 4.804zm9.49-4.003a1 1 0 0 0 .054-1.728L6.53 3.956A1 1 0 0 0 5 4.804v10.517a1 1 0 0 0 1.476.88z" clip-rule="evenodd"></svg:path>`,
})
export class PepiconsPencilPlayIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
