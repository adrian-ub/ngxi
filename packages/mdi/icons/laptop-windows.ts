import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiLaptopWindowsIcon],svg[mdi-laptop-windows-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M3 4h18a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1h1l2 3v1H0v-1l2-3h1a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1m1 2v9h16V6H4z" fill="currentColor"></svg:path>`,
})
export class MdiLaptopWindowsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
