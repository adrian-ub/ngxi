import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsGarageIcon],svg[hugeicons-garage-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="m9.781 3.098l-4.11 2.796c-1.307.89-1.961 1.335-2.316 2.011S3 9.385 3 10.99v6.929c0 1.924 0 2.886.586 3.484S5.114 22 7 22h10c1.886 0 2.828 0 3.414-.598s.586-1.56.586-3.484v-6.93c0-1.603 0-2.406-.355-3.083c-.355-.676-1.009-1.121-2.317-2.011l-4.11-2.796C13.144 2.366 12.607 2 12 2s-1.143.366-2.219 1.098"></svg:path><svg:path d="M7 22v-7c0-1.886 0-2.828.586-3.414S9.114 11 11 11h2c1.886 0 2.828 0 3.414.586S17 13.114 17 15v7M7 14h10M7 18h10M12.008 7h-.009"></svg:path></svg:g>`,
})
export class HugeiconsGarageIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
