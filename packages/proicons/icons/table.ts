import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsTableIcon],svg[proicons-table-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:rect width="18.5" height="16.5" x="2.75" y="3.75" rx="3"></svg:rect><svg:path d="M2.75 7.75h18.5M2.75 14h18.5M8.92 7.75v12.5m6.17-12.5v12.5"></svg:path></svg:g>`,
})
export class ProiconsTableIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
