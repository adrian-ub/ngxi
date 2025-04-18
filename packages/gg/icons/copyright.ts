import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggCopyrightIcon],svg[gg-copyright-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m13.392 10.436l1.419-1.418a4 4 0 1 0 .176 5.798l-1.313-1.313h-.21a2 2 0 1 1-.073-3.067"></svg:path><svg:path fill-rule="evenodd" d="M12 3a9 9 0 1 1 0 18a9 9 0 0 1 0-18m0 2a7 7 0 1 1 0 14a7 7 0 0 1 0-14" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgCopyrightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
