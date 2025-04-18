import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiPerspectiveLessIcon],svg[mdi-perspective-less-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16.56 12l2.67 8H4.78l2.66-8zM7 1L3 5l4 4V6h4V4H7zm10 0v3h-4v2h4v3l4-4zm1 9H6L2 22h20z"></svg:path>`,
})
export class MdiPerspectiveLessIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
