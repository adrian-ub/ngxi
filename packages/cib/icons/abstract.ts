import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cibAbstractIcon],svg[cib-abstract-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 0c12.803 0 16 3.197 16 16s-3.197 16-16 16S0 28.803 0 16S3.197 0 16 0m-2.625 24.749c3.365.005 6.141-2.76 6.147-6.124c0-3.36-2.767-6.125-6.125-6.125c-3.365 0-6.131 2.765-6.131 6.125c0 3.353 2.756 6.12 6.109 6.124M24.5 24.5v-17h-17v2.995h13.995V24.5zm-11.125-8.995a3.117 3.117 0 0 1 3.12 3.125a3.12 3.12 0 0 1-3.125 3.119c-4.161 0-4.161-6.249.005-6.244"></svg:path>`,
})
export class CibAbstractIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
