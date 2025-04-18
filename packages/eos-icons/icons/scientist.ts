import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[eosIconsScientistIcon],svg[eos-icons-scientist-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 17c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4"></svg:path><svg:circle cx="8" cy="12" r="4" fill="currentColor"></svg:circle><svg:circle cx="20" cy="5" r="1" fill="currentColor"></svg:circle><svg:circle cx="21.5" cy="3.5" r=".5" fill="currentColor"></svg:circle><svg:circle cx="20.5" cy="1.5" r=".5" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M16 7v1h1l.003 10.031C17 19.712 18 21 19.5 21s2.5-1.207 2.5-3V8h1V7Zm5 8l-.565.424a1.77 1.77 0 0 1-1.05.326H19V15h-1v-2h1v-1h-1v-2h1V9h-1V8h3Z"></svg:path>`,
})
export class EosIconsScientistIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
