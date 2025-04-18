import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBoxMultipleFilledIcon],svg[tabler-box-multiple-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M6 5.667A3.667 3.667 0 0 1 9.667 2h8.666A3.667 3.667 0 0 1 22 5.667v8.666A3.667 3.667 0 0 1 18.333 18H9.667A3.667 3.667 0 0 1 6 14.333z"></svg:path><svg:path d="M2 9c0-1.094.533-1.828 1.514-2.374a1 1 0 1 1 .972 1.748C4.088 8.595 4 8.716 4 9v10c0 .548.452 1 1 1h9.998c.32 0 .618-.154.805-.407l.065-.1a1 1 0 1 1 1.738.99A3 3 0 0 1 15 22H5c-1.652 0-3-1.348-3-3z"></svg:path></svg:g>`,
})
export class TablerBoxMultipleFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
