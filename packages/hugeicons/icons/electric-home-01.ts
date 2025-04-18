import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsElectricHome01Icon],svg[hugeicons-electric-home-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M20 8.585V13.5c0 3.772 0 5.657-1.172 6.829c-.808.808-1.956 1.059-3.828 1.136M4 8.585V13.5c0 3.772 0 5.657 1.172 6.829c1.063 1.063 2.714 1.161 5.828 1.17a1 1 0 0 0 1-.999v-3"></svg:path><svg:path d="m22 10.5l-4.343-4.164C14.99 3.779 13.657 2.5 12 2.5S9.01 3.78 6.343 6.336L2 10.5M14.001 9v2.5m-4 0V9m-1.495 3.38c-.04-.475.37-.88.89-.88h5.214c.52 0 .93.405.89.88l-.107 1.298a5.16 5.16 0 0 1-.98 2.61l-.35.482c-.331.456-.889.73-1.486.73h-1.148c-.597 0-1.155-.274-1.486-.73l-.35-.482a5.16 5.16 0 0 1-.98-2.61z"></svg:path></svg:g>`,
})
export class HugeiconsElectricHome01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
