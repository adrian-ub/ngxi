import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerFlagFilledIcon],svg[tabler-flag-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 5a1 1 0 0 1 .3-.714a6 6 0 0 1 8.213-.176l.351.328a4 4 0 0 0 5.272 0l.249-.227c.61-.483 1.527-.097 1.61.676L20 5v9a1 1 0 0 1-.3.714a6 6 0 0 1-8.213.176l-.351-.328A4 4 0 0 0 6 14.448V21a1 1 0 0 1-1.993.117L4 21z"></svg:path>`,
})
export class TablerFlagFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
