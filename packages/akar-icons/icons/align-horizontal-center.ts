import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[akarIconsAlignHorizontalCenterIcon],svg[akar-icons-align-horizontal-center-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="5.759" stroke-width="2"><svg:path d="M12 3v18"></svg:path><svg:path stroke-linejoin="round" d="M16 6h4v4h-4m-8 0H4V6h4m8 8h2v4h-2m-8-4H6v4h2"></svg:path></svg:g>`,
})
export class AkarIconsAlignHorizontalCenterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
