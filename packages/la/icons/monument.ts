import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laMonumentIcon],svg[la-monument-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 4a1.999 1.999 0 1 0 0 4a1.999 1.999 0 1 0 0-4m0 4h-4v2h1.469l-.438 10H10v6H8v2h16v-2h-2v-6h-3.031l-.438-10H20V8zm-.531 2h1.062l.438 10H15.03zM12 22h8v4h-8z"></svg:path>`,
})
export class LaMonumentIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
