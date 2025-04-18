import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggPathTrimIcon],svg[gg-path-trim-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M5 5h10v3H8v7H5z"></svg:path><svg:path d="M19 9H9v10h10z"></svg:path></svg:g>`,
})
export class GgPathTrimIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
