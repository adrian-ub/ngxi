import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhPsleftIcon],svg[whh-psleft-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m972.38 354l-295-280q-22-23-71-48.5t-79-25.5h-376q-63 0-107 43.5T.38 149v598q0 62 44 105.5t107 43.5h376q30 0 82-25t68-50l295-279q52-40 52-94t-52-94"></svg:path>`,
})
export class WhhPsleftIcon {
  readonly viewBox = input("0 0 1025 896")
  readonly width = input("1.15em")
  readonly height = input("1em")
}
