import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[nimbusForbiddenIcon],svg[nimbus-forbidden-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 .5A7.77 7.77 0 0 0 0 8a7.77 7.77 0 0 0 8 7.5A7.77 7.77 0 0 0 16 8A7.77 7.77 0 0 0 8 .5M1.25 8A6 6 0 0 1 3 3.85L12.09 13A7.1 7.1 0 0 1 8 14.25A6.52 6.52 0 0 1 1.25 8M13 12.15L3.91 3A7.1 7.1 0 0 1 8 1.75A6.52 6.52 0 0 1 14.75 8A6 6 0 0 1 13 12.15"></svg:path>`,
})
export class NimbusForbiddenIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
