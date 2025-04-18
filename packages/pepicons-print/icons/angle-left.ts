import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPrintAngleLeftIcon],svg[pepicons-print-angle-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="m11.453 11l4.2-5.04c1.28-1.536-1.025-3.457-2.305-1.92L8.39 9.988c-.256.272-.42.63-.418 1.012c-.002.382.162.74.418 1.012l4.957 5.948c1.28 1.537 3.585-.384 2.304-1.92z" clip-rule="evenodd" opacity=".2"></svg:path><svg:path d="m12.384 15.68l-5-6l-.768.64l5 6z"></svg:path><svg:path d="m11.616 16.32l-5-6c-.427-.512.341-1.152.768-.64l5 6c.427.512-.341 1.152-.768.64"></svg:path><svg:path d="m11.616 3.68l-5 6l.768.64l5-6z"></svg:path><svg:path d="m12.384 4.32l-5 6c-.427.512-1.195-.128-.768-.64l5-6c.427-.512 1.195.128.768.64"></svg:path></svg:g>`,
})
export class PepiconsPrintAngleLeftIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
