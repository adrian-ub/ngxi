import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsPresentationLineChart01Icon],svg[hugeicons-presentation-line-chart-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M2.5 8c0-2.828 0-4.243.879-5.121C4.257 2 5.672 2 8.5 2h7c2.828 0 4.243 0 5.121.879c.879.878.879 2.293.879 5.121v3c0 2.828 0 4.243-.879 5.121C19.743 17 18.328 17 15.5 17h-7c-2.828 0-4.243 0-5.121-.879C2.5 15.243 2.5 13.828 2.5 11z"></svg:path><svg:path d="m8 9.725l.697-.915c.878-1.154 2.432-1.062 3.209.19c.75 1.21 2.237 1.344 3.134.283L16 8.15M7 22l5-3l5 3m-5-4.5V22"></svg:path></svg:g>`,
})
export class HugeiconsPresentationLineChart01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
