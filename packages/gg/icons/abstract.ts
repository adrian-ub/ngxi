import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggAbstractIcon],svg[gg-abstract-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M5 5h14v14h-3V8H5z"></svg:path><svg:path fill-rule="evenodd" d="M10 19a5 5 0 1 0 0-10a5 5 0 0 0 0 10m0-3a2 2 0 1 0 0-4a2 2 0 0 0 0 4" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgAbstractIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
