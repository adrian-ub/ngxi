import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggMicrobitIcon],svg[gg-microbit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M7 14a2 2 0 1 0 0-4a2 2 0 0 0 0 4m12-2a2 2 0 1 1-4 0a2 2 0 0 1 4 0"></svg:path><svg:path fill-rule="evenodd" d="M7 5a7 7 0 0 0 0 14h10a7 7 0 1 0 0-14zm10 3H7a4 4 0 1 0 0 8h10a4 4 0 0 0 0-8" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgMicrobitIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
