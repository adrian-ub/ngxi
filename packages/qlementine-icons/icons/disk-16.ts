import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[qlementineIconsDisk16Icon],svg[qlementine-icons-disk-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 8a1 1 0 1 1-2 0a1 1 0 0 1 2 0m3.8 2.7a.47.47 0 0 0 .664-.196c.359-.77.56-1.63.56-2.53c0-.906-.201-1.76-.56-2.53a.47.47 0 0 0-.664-.195l-1.74.993c-.24.137-.319.442-.223.701a3.03 3.03 0 0 1 0 2.08c-.095.259-.017.564.223.701l1.74.993zM2 8c0 .906.201 1.76.56 2.53a.47.47 0 0 0 .664.196l1.74-.993c.24-.137.319-.442.223-.701a3 3 0 0 1 0-2.08c.095-.259.017-.564-.223-.701l-1.74-.993a.47.47 0 0 0-.664.196c-.359.77-.56 1.63-.56 2.53z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M16 8c0 4.42-3.58 8-8 8s-8-3.58-8-8s3.58-8 8-8s8 3.58 8 8m-1 0c0 3.87-3.13 7-7 7s-7-3.13-7-7s3.13-7 7-7s7 3.13 7 7" clip-rule="evenodd"></svg:path>`,
})
export class QlementineIconsDisk16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
