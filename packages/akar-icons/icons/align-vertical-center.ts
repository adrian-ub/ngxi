import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[akarIconsAlignVerticalCenterIcon],svg[akar-icons-align-vertical-center-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="5.759" stroke-width="2"><svg:path d="M21 12H3"></svg:path><svg:path stroke-linejoin="round" d="M6 16v4h4v-4m4 0v2h4v-2m-4-8V6h4v2m-8 0V4H6v4"></svg:path></svg:g>`,
})
export class AkarIconsAlignVerticalCenterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
