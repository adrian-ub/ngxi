import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggPresentationIcon],svg[gg-presentation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10m8-10h-2a6 6 0 0 0-12 0H4a8 8 0 1 1 16 0M4.252 14h15.496a8.003 8.003 0 0 1-15.496 0M8 12a4 4 0 1 1 8 0z" clip-rule="evenodd"></svg:path>`,
})
export class GgPresentationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
