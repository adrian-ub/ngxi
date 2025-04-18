import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsBedSingle02Icon],svg[hugeicons-bed-single-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M22 17.5H2M22 21v-5c0-1.886 0-2.828-.586-3.414S19.886 12 18 12H6c-1.886 0-2.828 0-3.414.586S2 14.114 2 16v5m14-9v-1.382c0-.508-.091-.677-.56-.877C14.463 9.324 13.278 9 12 9s-2.463.324-3.44.74c-.468.2-.56.37-.56.878V12"></svg:path><svg:path d="M3 12V9c0-1.414 0-2.121.44-2.56C3.878 6 4.585 6 6 6c.275 0 .657.073.903-.06c.11-.06.21-.211.41-.514C8.269 3.972 10.225 3 12 3s3.73.972 4.687 2.426c.2.303.3.454.41.514c.246.133.628.06.903.06c1.414 0 2.121 0 2.56.44C21 6.878 21 7.585 21 9v3"></svg:path></svg:g>`,
})
export class HugeiconsBedSingle02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
