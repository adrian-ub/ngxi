import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineBusTwoIcon],svg[icon-park-outline-bus-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M4 6a2 2 0 0 1 2-2h36a2 2 0 0 1 2 2v32a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z" clip-rule="evenodd"></svg:path><svg:path d="M16 40H8v4h8zm24 0h-8v4h8zM21 16h6M10 34h2m7 0h10M4 25h40M4 10h40m-8 24h2M4 6v8m40-8v8M4 21v8m40-8v8"></svg:path></svg:g>`,
})
export class IconParkOutlineBusTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
