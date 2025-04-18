import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsBus01Icon],svg[hugeicons-bus-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M17 20.5V22M7 20.5V22M4 6.782c0-.64 0-.96.174-1.348c.174-.39.35-.548.703-.864C6.034 3.533 8.36 2 12 2s5.966 1.533 7.123 2.57c.353.316.53.474.703.864c.174.389.174.709.174 1.348V14c0 2.828 0 4.243-.879 5.121C18.243 20 16.828 20 14 20h-4c-2.828 0-4.243 0-5.121-.879C4 18.243 4 16.828 4 14z"></svg:path><svg:path d="M4 14s3.733 1 8 1s8-1 8-1M4.5 17.5H6m12 0h1.5m-8.5 0h2M4 6h16M2 9v1m20-1v1"></svg:path></svg:g>`,
})
export class HugeiconsBus01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
