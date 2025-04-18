import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cbiF1Icon],svg[cbi-f1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.192 12.209c-.546.515-1.733 1.668-2.373 2.291H2s2.259-2.252 3.514-3.488C6.808 9.781 7.452 9.5 9.825 9.5h8.636l-1.87 1.87H10c-1.667 0-2.041.115-2.808.839m9.091-.532H10.23c-1.844 0-2.167.1-2.957.888c-.739.739-1.94 1.935-1.94 1.935h2.622l.626-.626c.411-.411.623-.453 1.487-.453h4.472ZM17 14.5l5-5h-3.009l-5 5z"></svg:path>`,
})
export class CbiF1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
