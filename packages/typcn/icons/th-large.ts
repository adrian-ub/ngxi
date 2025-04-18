import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[typcnThLargeIcon],svg[typcn-th-large-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 3H6a3 3 0 0 0-2.119.881A3 3 0 0 0 3 6v2c0 .825.337 1.575.881 2.119A3 3 0 0 0 6 11h2a3 3 0 0 0 2.119-.881A3 3 0 0 0 11 8V6a3 3 0 0 0-.881-2.119A3 3 0 0 0 8 3m10 0h-2a3 3 0 0 0-2.119.881A3 3 0 0 0 13 6v2c0 .825.337 1.575.881 2.119A3 3 0 0 0 16 11h2a3 3 0 0 0 2.119-.881A3 3 0 0 0 21 8V6a3 3 0 0 0-.881-2.119A3 3 0 0 0 18 3M8 13H6a3 3 0 0 0-2.119.881A3 3 0 0 0 3 16v2c0 .825.337 1.575.881 2.119A3 3 0 0 0 6 21h2a3 3 0 0 0 2.119-.881A3 3 0 0 0 11 18v-2a3 3 0 0 0-.881-2.119A3 3 0 0 0 8 13m10 0h-2a3 3 0 0 0-2.119.881A3 3 0 0 0 13 16v2c0 .825.337 1.575.881 2.119A3 3 0 0 0 16 21h2a3 3 0 0 0 2.119-.881A3 3 0 0 0 21 18v-2a3 3 0 0 0-.881-2.119A3 3 0 0 0 18 13"></svg:path>`,
})
export class TypcnThLargeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
