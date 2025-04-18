import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggStyleIcon],svg[gg-style-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M13 21v-8h8v8zm2-6h4v4h-4zM3 11V3h8v8zm2-6h4v4H5z" clip-rule="evenodd"></svg:path><svg:path d="M18 6v6h-2V8h-4V6zm-6 12H6v-6h2v4h4z"></svg:path></svg:g>`,
})
export class GgStyleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
