import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsPpt01Icon],svg[hugeicons-ppt-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M3.5 13v-.804c0-2.967 0-4.45.469-5.636c.754-1.905 2.348-3.407 4.37-4.118C9.595 2 11.168 2 14.318 2c1.798 0 2.698 0 3.416.253c1.155.406 2.066 1.264 2.497 2.353c.268.677.268 1.525.268 3.22V13"></svg:path><svg:path d="M3.5 12a3.333 3.333 0 0 1 3.333-3.333c.666 0 1.451.116 2.098-.057a1.67 1.67 0 0 0 1.179-1.18c.173-.647.057-1.432.057-2.098A3.333 3.333 0 0 1 13.5 2m-10 20v-5.3a.7.7 0 0 1 .7-.7h1.033c.774 0 1.563.432 1.661 1.199c.026.2.026.395 0 .595c-.1.77-.89 1.206-1.668 1.206H4m6 3v-5.3a.7.7 0 0 1 .7-.7h1.177c.697 0 1.422.342 1.578 1.021a1.9 1.9 0 0 1-.003.88c-.161.717-.91 1.099-1.643 1.099H11m5.5-3h2m0 0h2m-2 0v6"></svg:path></svg:g>`,
})
export class HugeiconsPpt01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
