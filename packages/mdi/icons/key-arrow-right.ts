import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiKeyArrowRightIcon],svg[mdi-key-arrow-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.7 6c-.6-1.8-2.3-3-4.2-3C5 3 3 5 3 7.5S5 12 7.5 12c2 0 3.6-1.2 4.2-3H15v3h3V9h3V6zM7.5 9C6.7 9 6 8.3 6 7.5S6.7 6 7.5 6S9 6.7 9 7.5S8.3 9 7.5 9M13 21v-2H8v-2h5v-2l3 3z"></svg:path>`,
})
export class MdiKeyArrowRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
