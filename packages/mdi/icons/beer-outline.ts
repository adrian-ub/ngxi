import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiBeerOutlineIcon],svg[mdi-beer-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m4 2l2 20h11l2-20zm2.2 2h10.6l-.3 3.23c-3.32 1.27-4.65.44-5.12.08c-.25-.19-.61-.62-1.27-.92c-.66-.31-1.56-.39-2.61-.07c-.41.11-.73.29-1 .47zm2.66 4.11c.19 0 .3.04.41.09c.23.1.44.35.9.7c.86.66 2.86 1.46 6.09.51L15.2 20H7.8L6.71 9.06c.05-.06.2-.17.46-.35c.33-.21.74-.43.83-.46h.03c.38-.11.64-.15.83-.14"></svg:path>`,
})
export class MdiBeerOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
