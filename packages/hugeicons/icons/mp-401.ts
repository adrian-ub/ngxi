import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsMp401Icon],svg[hugeicons-mp-401-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M3.5 13v-.804c0-2.967 0-4.45.469-5.636c.754-1.905 2.348-3.407 4.37-4.118C9.595 2 11.168 2 14.318 2c1.798 0 2.698 0 3.416.253c1.155.406 2.066 1.264 2.497 2.353c.268.677.268 1.525.268 3.22V13"></svg:path><svg:path d="M3.5 12a3.333 3.333 0 0 1 3.333-3.333c.666 0 1.451.116 2.098-.057a1.67 1.67 0 0 0 1.179-1.18c.173-.647.057-1.432.057-2.098A3.333 3.333 0 0 1 13.5 2m-2.441 20v-3m0 0v-1.8c0-.566 0-.848.165-1.024c.166-.176.432-.176.964-.176h.753c.78 0 1.412.672 1.412 1.5S13.72 19 12.94 19zM3.5 22l.39-5.28c.034-.448.05-.672.172-.713c.122-.042.248.133.498.484l.997 1.4c.136.19.204.285.294.285s.158-.095.294-.286l.998-1.4c.25-.35.375-.526.497-.484s.139.265.172.713L8.206 22M20.5 16v3m0 0v3m0-3h-1.412c-.887 0-1.33 0-1.607-.293c-.275-.293-.275-.764-.275-1.707v-1"></svg:path></svg:g>`,
})
export class HugeiconsMp401Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
