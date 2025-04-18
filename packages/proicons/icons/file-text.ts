import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsFileTextIcon],svg[proicons-file-text-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M11.688 3.063a3.5 3.5 0 0 1 1.027.712l5.968 5.97c.3.3.54.647.711 1.026m-7.706-7.708a3.5 3.5 0 0 0-1.448-.313H7.792a3.5 3.5 0 0 0-3.5 3.5v11.5a3.5 3.5 0 0 0 3.5 3.5h8.416a3.5 3.5 0 0 0 3.5-3.5v-5.53c0-.505-.109-.999-.314-1.45m-7.706-7.707V8.77a2 2 0 0 0 2 2h5.706"></svg:path><svg:path d="M7.29 13.77h9.42m-9.42 3.48h6.42"></svg:path></svg:g>`,
})
export class ProiconsFileTextIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
