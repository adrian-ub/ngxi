import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsPizza01Icon],svg[hugeicons-pizza-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="m10.22 18.821l8.46-5.69c1.445-.972 2.167-1.458 2.299-2.343c.13-.885-.344-1.48-1.293-2.67c-2.178-2.73-5.138-4.765-8.524-5.737c-1.288-.37-1.932-.554-2.622-.162s-.916 1.157-1.367 2.687l-2.767 9.397c-1.294 4.397-1.941 6.595-.858 7.436s2.946-.412 6.672-2.918"></svg:path><svg:path d="M7.5 5s.538.118 1.4.381c2.732.835 5.17 2.452 7.1 4.62M13.008 11h-.009M6.284 7.954c1.075.295 1.76 1.278 1.76 2.473c0 1.667-1.62 2.941-3.22 2.487m3.399 5.835c-.552-.97-.401-2.24.444-3.086c1.009-1.009 2.625-1.028 3.61-.043q.248.25.41.544"></svg:path><svg:path d="M12.923 16.993c-.296-1.145-1.265-1.984-2.414-1.984c-1.385 0-2.507 1.219-2.507 2.722c0 .797.315 1.513.817 2.011"></svg:path></svg:g>`,
})
export class HugeiconsPizza01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
