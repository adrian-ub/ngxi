import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerFerryFilledIcon],svg[tabler-ferry-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 12a1 1 0 0 1 .86 1.51l-2.202 3.709A4.06 4.06 0 0 1 17.293 19H2a1 1 0 0 1-.957-1.291l1.521-5A1 1 0 0 1 3.521 12zm-3 1a1 1 0 1 0 0 2a1 1 0 0 0 0-2m-5.106-7.447L14.617 7h.874a1 1 0 0 1 .864.497L18.392 11H5.56l.973-3.284A1 1 0 0 1 7.491 7h4.89l-.275-.553a1 1 0 0 1 1.788-.894"></svg:path>`,
})
export class TablerFerryFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
