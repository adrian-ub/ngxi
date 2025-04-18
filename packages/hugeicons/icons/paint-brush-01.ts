import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsPaintBrush01Icon],svg[hugeicons-paint-brush-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.89 20.873L3 21l.127-.89c.194-1.356.29-2.034.591-2.635s.785-1.085 1.753-2.053L16.983 3.91c.423-.423.635-.635.863-.748a1.55 1.55 0 0 1 1.38 0c.229.113.44.325.864.748c.424.424.635.635.749.864c.215.435.215.945 0 1.38c-.114.228-.325.44-.75.863L8.58 18.53c-.969.968-1.453 1.452-2.054 1.753s-1.279.397-2.634.59M6 15l3 3m-.5-5.5l3 3" color="currentColor"></svg:path>`,
})
export class HugeiconsPaintBrush01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
