import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsComet02Icon],svg[hugeicons-comet-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m15 2l-1.001 1.001M9 8l3-3m9.414 5.586a2 2 0 1 1-2.828 2.828a2 2 0 0 1 2.828-2.828M2.121 16.163l.902-2.846a2.7 2.7 0 0 1 1.393-1.599l1.092-.53c.854-.415 1.893-.121 2.384.674l1.021 1.655c.253.408.379.612.54.718a.88.88 0 0 0 .771.092c.183-.063.356-.232.702-.568c.816-.792 2.173-.662 2.812.27l.802 1.169a2.6 2.6 0 0 1 .355 2.208l-.235.797a2.68 2.68 0 0 1-1.409 1.65l-3.84 1.866a2.81 2.81 0 0 1-2.819-.215l-3.444-2.39a2.62 2.62 0 0 1-1.027-2.95M22 2l-8 8" color="currentColor"></svg:path>`,
})
export class HugeiconsComet02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
