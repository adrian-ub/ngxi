import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggPlayButtonRIcon],svg[gg-play-button-r-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2M5 1a4 4 0 0 0-4 4v14a4 4 0 0 0 4 4h14a4 4 0 0 0 4-4V5a4 4 0 0 0-4-4z" clip-rule="evenodd"></svg:path><svg:path d="m16 12l-6 4.33V7.67z"></svg:path></svg:g>`,
})
export class GgPlayButtonRIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
