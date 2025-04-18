import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsFemaleSymbolIcon],svg[hugeicons-female-symbol-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 23c-.41 0-.75-.34-.75-.75V20H9c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2.25v-3.54c-3.37-.37-6-3.24-6-6.71C5.25 4.53 8.28 1.5 12 1.5s6.75 3.03 6.75 6.75c0 3.47-2.63 6.33-6 6.71v3.54H15c.41 0 .75.34.75.75s-.34.75-.75.75h-2.25v2.25c0 .41-.34.75-.75.75m0-20a5.25 5.25 0 1 0 0 10.5A5.25 5.25 0 1 0 12 3" color="currentColor"></svg:path>`,
})
export class HugeiconsFemaleSymbolIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
