import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[makiCarRepair11Icon],svg[maki-car-repair-11-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M9.5 1.25H4.352A1.991 1.991 0 0 0 .778 1H2.5L3 2l-.5 1H.777a1.991 1.991 0 0 0 3.575-.25H9.5a.75.75 0 0 0 0-1.5z" fill="currentColor"></svg:path><svg:path d="M8.31 7.034L8.061 5.83A.988.988 0 0 0 7.083 5H3.917c-.488 0-.9.35-.975.81L2.69 7.036a.853.853 0 0 0-.689.83V10h.5a1 1 0 0 0 2 0h2a1 1 0 0 0 2 0H9V7.86c0-.415-.3-.744-.69-.826zM3.75 9a.75.75 0 1 1 0-1.5a.75.75 0 0 1 0 1.5zm-.037-2l.204-1l3.162.012l.204.988h-3.57zM7.25 9a.75.75 0 1 1 0-1.5a.75.75 0 0 1 0 1.5z" fill="currentColor"></svg:path>`,
})
export class MakiCarRepair11Icon {
  readonly viewBox = input("0 0 11 11")
  readonly width = input("1em")
  readonly height = input("1em")
}
