import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[makiIndustry11Icon],svg[maki-industry-11-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M10 1v8H1V6l2.11-1.78c.32-.32.89-.31.89.14V6l2.13-1.86A.5.5 0 0 1 7 4.5V8h2V1h1z" fill="currentColor"></svg:path>`,
})
export class MakiIndustry11Icon {
  readonly viewBox = input("0 0 11 11")
  readonly width = input("1em")
  readonly height = input("1em")
}
