import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsSquareDragIcon],svg[proicons-square-drag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M12.073 17.533v-3.864m2.544-2.937c0-.699-.57-1.265-1.272-1.265s-1.272.566-1.272 1.265v2.937m2.544-.444v-4.21c0-.698.57-1.265 1.272-1.265s1.272.567 1.272 1.266v1.716m0 0v2.493m0-2.493a1.273 1.273 0 0 1 2.545 0v1.717m0 0v.776m0-.776c0-.7.57-1.266 1.272-1.266s1.272.567 1.272 1.266V17.1a5.15 5.15 0 0 1-5.15 5.15h-2.31a5.55 5.55 0 0 1-5.541-5.872l.012-.201a2.4 2.4 0 0 1 1.67-2.146l1.142-.362"></svg:path><svg:path d="M6.75 18.25a3 3 0 0 1-3-3v-8.5a3 3 0 0 1 3-3h8.5a3 3 0 0 1 2.959 2.5"></svg:path></svg:g>`,
})
export class ProiconsSquareDragIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
