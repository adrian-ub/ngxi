import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsMotherboardIcon],svg[proicons-motherboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:rect width="13.5" height="13.5" x="5.25" y="5.25" rx="3"></svg:rect><svg:path d="M18.75 8.75h2.5M18.75 12h2.5m-2.5 3.25h2.5m-6 3.5v2.5M12 18.75v2.5m-3.25-2.5v2.5m-6-12.5h2.5M2.75 12h2.5m-2.5 3.25h2.5m10-12.5v2.5M12 2.75v2.5m-3.25-2.5v2.5"></svg:path><svg:rect width="5" height="5" x="9.5" y="9.5" rx="1"></svg:rect></svg:g>`,
})
export class ProiconsMotherboardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
