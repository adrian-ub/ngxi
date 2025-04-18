import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiAbugidaThaiIcon],svg[mdi-abugida-thai-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 20c0-2.56 1.87-7.58 4.86-12.75C14.29 6.5 15.08 6 16 6c1.12 0 2 .88 2 2v12h2V8c0-2.2-1.8-4-4-4c-1.66 0-3.1.92-3.87 2.25c-1.57 2.71-2.52 4.9-3.13 6.78V6.5C9 5.13 7.87 4 6.5 4S4 5.13 4 6.5S5.13 9 6.5 9c.17 0 .34 0 .5-.05V20M6.5 6c.29 0 .5.21.5.5s-.21.5-.5.5s-.5-.21-.5-.5s.21-.5.5-.5"></svg:path>`,
})
export class MdiAbugidaThaiIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
