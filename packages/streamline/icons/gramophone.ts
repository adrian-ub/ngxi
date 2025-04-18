import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineGramophoneIcon],svg[streamline-gramophone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.79 10.5C11.5 7 8 5 5.5 5l4-4.5s4 2 4 10m-12 0h12v2a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1M.5 8h6"></svg:path>`,
})
export class StreamlineGramophoneIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
