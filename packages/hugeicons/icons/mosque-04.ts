import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsMosque04Icon],svg[hugeicons-mosque-04-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M17 22v-8c0-1.886 0-2.828-.586-3.414S14.886 10 13 10h-2c-1.886 0-2.828 0-3.414.586S7 12.114 7 14v8zM7 22V12H3v10zM5 12v-2m14 2v-2m-2 12V12h4v10zM2 12h5m2.025-2C5.94 6 10.678 4 12 2c1.322 2 6.06 4 2.975 8zM22 12h-5"></svg:path><svg:path d="M10 22v-3c0-.978 0-1.467.142-1.913a3 3 0 0 1 .413-.826c.271-.38.662-.674 1.445-1.261c.783.587 1.174.88 1.445 1.261a3 3 0 0 1 .413.826C14 17.533 14 18.022 14 19v3"></svg:path></svg:g>`,
})
export class HugeiconsMosque04Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
