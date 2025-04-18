import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiVectorPolylineRemoveIcon],svg[mdi-vector-polyline-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.1 15.5L19 17.6l-2.1-2.1l-1.4 1.4l2.1 2.1l-2.1 2.1l1.4 1.4l2.1-2.1l2.1 2.1l1.4-1.4l-2.1-2.1l2.1-2.1zM16 5v4.6L10.6 15H9.1l-2-6H8V3H2v6h3l2 6H6v6h6v-4.6l5.4-5.4H22V5zM6 7H4V5h2zm4 12H8v-2h2zM20 9h-2V7h2z"></svg:path>`,
})
export class MdiVectorPolylineRemoveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
