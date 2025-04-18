import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fontistoCalendarIcon],svg[fontisto-calendar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.5 0h-3v3h3zm3 0H21v4.5h-6V0H9v4.5H3V0H1.499C.671 0 0 .671 0 1.499v21.002C0 23.329.671 24 1.499 24h21.002c.828 0 1.499-.671 1.499-1.499V1.499C24 .671 23.329 0 22.501 0zM21 21H3V7.5h18zM7.5 0h-3v3h3zm6 10.5h-3v3h3zm4.5 0h-3v3h3zM9 15H6v3h3zm0-4.5H6v3h3zm4.5 4.5h-3v3h3zm4.5 0h-3v3h3z"></svg:path>`,
})
export class FontistoCalendarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
