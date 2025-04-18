import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineTicketsIcon],svg[streamline-tickets-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m4.656 2.255l-.39.09a1.19 1.19 0 0 1-.91 1.43a1.22 1.22 0 0 1-1.44-.92l-.78.16a.81.81 0 0 0-.61 1s.36 1.67.78 3.55m10.85-5.32a1.32 1.32 0 1 1-2.44-1l-.81-.38a.89.89 0 0 0-1.16.47l-3.36 7.91l-.44 1a.89.89 0 0 0 .47 1.16l4.06 1.73a.89.89 0 0 0 1.16-.47l3.8-8.94a.89.89 0 0 0-.43-1.13z"></svg:path>`,
})
export class StreamlineTicketsIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
