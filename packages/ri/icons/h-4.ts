import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riH4Icon],svg[ri-h-4-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 20h-2v-7H4v7H2V4h2v7h7V4h2zm9-12v8h1.5v2H22v2h-2v-2h-5.5v-1.34l5-8.66zm-2 3.133L17.19 16H20z"></svg:path>`,
})
export class RiH4Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
