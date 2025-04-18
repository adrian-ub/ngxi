import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirGraphUpIcon],svg[iconoir-graph-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M20 20H4V4"></svg:path><svg:path d="M4 16.5L12 9l3 3l4.5-4.5"></svg:path></svg:g>`,
})
export class IconoirGraphUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
