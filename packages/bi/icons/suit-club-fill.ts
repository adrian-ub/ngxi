import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[biSuitClubFillIcon],svg[bi-suit-club-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.5 12.5a3.5 3.5 0 0 1-2.684-1.254a20 20 0 0 0 1.582 2.907c.231.35-.02.847-.438.847H6.04c-.419 0-.67-.497-.438-.847a20 20 0 0 0 1.582-2.907a3.5 3.5 0 1 1-2.538-5.743a3.5 3.5 0 1 1 6.708 0A3.5 3.5 0 1 1 11.5 12.5"></svg:path>`,
})
export class BiSuitClubFillIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
