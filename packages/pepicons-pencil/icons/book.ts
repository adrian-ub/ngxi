import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilBookIcon],svg[pepicons-pencil-book-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M10.08 4.304L2.244 3.019A1.5 1.5 0 0 0 .5 4.5v9.738a1.5 1.5 0 0 0 1.268 1.482l8.155 1.275a.5.5 0 0 0 .577-.494V4.797a.5.5 0 0 0-.42-.493m-8-.298L9.5 5.222v10.694L1.923 14.73a.5.5 0 0 1-.423-.493V4.5a.5.5 0 0 1 .58-.494"></svg:path><svg:path d="M18 3a1.5 1.5 0 0 0-.243.02L9.92 4.303a.5.5 0 0 0-.419.493V16.5a.5.5 0 0 0 .577.494l8.155-1.275a1.5 1.5 0 0 0 1.268-1.482V4.5A1.5 1.5 0 0 0 18 3m.077 11.73L10.5 15.917V5.222l7.42-1.216a.5.5 0 0 1 .58.494v9.737a.5.5 0 0 1-.423.493"></svg:path></svg:g>`,
})
export class PepiconsPencilBookIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
