import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiNecklaceIcon],svg[mdi-necklace-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.5 5h-2c0 4.14-3.36 7.5-7.5 7.5S4.5 9.14 4.5 5h-2c.05 5.11 4.09 9.29 9.2 9.5c-.6.9-1.7 2.7-1.7 3.5c0 2.67 4 2.67 4 0c0-.8-1.1-2.6-1.7-3.5c5.11-.21 9.15-4.39 9.2-9.5"></svg:path>`,
})
export class MdiNecklaceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
