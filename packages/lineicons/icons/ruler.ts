import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsRulerIcon],svg[lineicons-ruler-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M41.1 1.8H22.9c-3.4 0-6.2 2.8-6.2 6.2v48c0 3.4 2.8 6.2 6.2 6.2h18.2c3.4 0 6.2-2.8 6.2-6.2V8c.1-3.4-2.8-6.2-6.2-6.2M42.9 56c0 1-.8 1.8-1.8 1.8H22.9c-1 0-1.8-.8-1.8-1.8v-3.5h12.5c1.2 0 2.2-1 2.2-2.2s-1-2.2-2.2-2.2H21.1V43h7.4c1.2 0 2.2-1 2.2-2.2s-1-2.2-2.2-2.2h-7.4v-4.9h12.5c1.2 0 2.2-1 2.2-2.2s-1-2.2-2.2-2.2H21.1v-4.9h7.4c1.2 0 2.2-1 2.2-2.2s-1-2.2-2.2-2.2h-7.4v-4.9h12.5c1.2 0 2.2-1 2.2-2.2s-1-2.2-2.2-2.2H21.1V8c0-1 .8-1.8 1.8-1.8h18.2c1 0 1.8.8 1.8 1.8z"></svg:path>`,
})
export class LineiconsRulerIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
