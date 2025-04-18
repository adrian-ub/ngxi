import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[systemUiconsFlameAltIcon],svg[system-uicons-flame-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.5 3Q16 8 16 12.286c0 3.078-1.27 5.198-3.111 6.148c.23-.491.361-1.092.361-1.791q0-2.143-2.75-4.643q-2.75 2.5-2.75 4.643c0 .7.131 1.3.36 1.791c-1.84-.95-3.11-3.07-3.11-6.148Q5 8 10.5 3"></svg:path>`,
})
export class SystemUiconsFlameAltIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}
