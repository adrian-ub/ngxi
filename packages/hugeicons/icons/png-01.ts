import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsPng01Icon],svg[hugeicons-png-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M3.5 13.01v-.805c0-2.97 0-4.456.469-5.642c.754-1.907 2.348-3.411 4.37-4.123c1.257-.442 2.83-.442 5.98-.442c1.798 0 2.698 0 3.416.253c1.155.406 2.066 1.266 2.497 2.356c.268.677.268 1.526.268 3.224v5.179"></svg:path><svg:path d="M3.5 12.009a3.335 3.335 0 0 1 3.333-3.337c.666 0 1.451.117 2.098-.057a1.67 1.67 0 0 0 1.179-1.18c.173-.648.057-1.434.057-2.1A3.335 3.335 0 0 1 13.5 1.998m-10 19.998V16.03h1.987c.733 0 1.384.526 1.41 1.254q.009.236 0 .468c-.027.731-.682 1.261-1.418 1.261H4.256M20.5 17.025c-.04-.81-.502-1.014-2-.995h-.765c-.553 0-1 .445-1 .995V21c0 .55.447.995 1 .995h2.264c.277 0 .5-.223.5-.497v-1.492a.5.5 0 0 0-.5-.497h-1m-9.251 2.492l.08-5.564c0-.26.269-.193.323-.11l3.139 5.386c.16.282.443.005.443-.094v-5.624"></svg:path></svg:g>`,
})
export class HugeiconsPng01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
