import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsTrendDown1Icon],svg[lineicons-trend-down-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.75 4a.75.75 0 0 0-1.5 0v14.5a2.25 2.25 0 0 0 2.25 2.25H20a.75.75 0 0 0 0-1.5H5.5a.75.75 0 0 1-.75-.75v-8.109l3.92 3.92a.75.75 0 0 0 1.06 0l3.422-3.423l3.78 3.78h-1.72a.75.75 0 0 0 0 1.5h3.535a.75.75 0 0 0 .75-.75v-3.535a.75.75 0 0 0-1.5 0v1.729l-4.314-4.315a.75.75 0 0 0-1.061 0L9.2 12.72L4.75 8.27z"></svg:path>`,
})
export class LineiconsTrendDown1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
