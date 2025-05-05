import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsMcpServerIcon],svg[hugeicons-mcp-server-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="m3.5 11.75l8.172-8.171a2.828 2.828 0 1 1 4 4m0 0L9.5 13.75m6.172-6.171a2.828 2.828 0 0 1 4 4l-6.965 6.964a1 1 0 0 0 0 1.414L14 21.25"></svg:path><svg:path d="m17.5 9.75l-6.172 6.171a2.829 2.829 0 0 1-4-4L13.5 5.749"></svg:path></svg:g>`,
})
export class HugeiconsMcpServerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
