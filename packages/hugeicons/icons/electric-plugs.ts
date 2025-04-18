import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsElectricPlugsIcon],svg[hugeicons-electric-plugs-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M9 2v3m6-3v3m-3 13v4m.694-13.5l-2.091 2.175c-.224.233-.064.568.302.63l2.19.372c.39.066.538.438.266.664L10.767 14.5"></svg:path><svg:path d="M14.307 5H9.693c-2.138 0-3.207 0-3.798.698c-.59.697-.428 1.768-.103 3.91l.524 3.45C6.836 16.484 8.286 18 12 18s5.164-1.516 5.684-4.942l.524-3.45c.325-2.142.487-3.213-.103-3.91S16.445 5 14.307 5"></svg:path></svg:g>`,
})
export class HugeiconsElectricPlugsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
