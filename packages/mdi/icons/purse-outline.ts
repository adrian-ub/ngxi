import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiPurseOutlineIcon],svg[mdi-purse-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19 11l1 8H4l1-8zm-5-8h-4L8 5v4H4.7A1.65 1.65 0 0 0 3 10.5l-1 8.6A1.74 1.74 0 0 0 3.7 21h16.6a1.74 1.74 0 0 0 1.7-1.9l-1-8.6A1.65 1.65 0 0 0 19.3 9H16V5zm-4 6V5h4v4"></svg:path>`,
})
export class MdiPurseOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
