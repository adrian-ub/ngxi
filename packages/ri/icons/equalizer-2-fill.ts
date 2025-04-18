import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riEqualizer2FillIcon],svg[ri-equalizer-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 7a3.5 3.5 0 1 1 7 0a3.5 3.5 0 0 1-7 0m17 1h-8V6h8zm-6 9a3.5 3.5 0 1 1 7 0a3.5 3.5 0 0 1-7 0m-2-1v2H4v-2z"></svg:path>`,
})
export class RiEqualizer2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
