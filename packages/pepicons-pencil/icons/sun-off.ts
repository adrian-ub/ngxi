import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilSunOffIcon],svg[pepicons-pencil-sun-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M10 13.5a3.5 3.5 0 1 0 0-7a3.5 3.5 0 0 0 0 7m0-6a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0-5" clip-rule="evenodd"></svg:path><svg:rect width="1" height="3" x="1" y="10.5" rx=".5" transform="rotate(-90 1 10.5)"></svg:rect><svg:rect width="1" height="3" x="16" y="10.5" rx=".5" transform="rotate(-90 16 10.5)"></svg:rect><svg:rect width="1" height="3" x="14" y="14.707" rx=".5" transform="rotate(-45 14 14.707)"></svg:rect><svg:rect width="1" height="3" x="3" y="3.707" rx=".5" transform="rotate(-45 3 3.707)"></svg:rect><svg:rect width="1" height="3" x="9.5" y="16" rx=".5"></svg:rect><svg:rect width="1" height="3" x="9.5" y="1" rx=".5"></svg:rect><svg:rect width="1" height="3" x="16.121" y="3" rx=".5" transform="rotate(45 16.121 3)"></svg:rect><svg:rect width="1" height="3" x="5.121" y="14" rx=".5" transform="rotate(45 5.121 14)"></svg:rect><svg:path d="M1.15 1.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path></svg:g>`,
})
export class PepiconsPencilSunOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
