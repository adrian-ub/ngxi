import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsTableSimpleIcon],svg[proicons-table-simple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:rect width="16.5" height="16.5" x="3.75" y="3.75" rx="3"></svg:rect><svg:path d="M3.75 9.25h16.5m-16.5 5.5h16.5m-11-11v16.5m5.5-16.5v16.5"></svg:path></svg:g>`,
})
export class ProiconsTableSimpleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
