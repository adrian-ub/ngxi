import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSquareLockRemove02Icon],svg[hugeicons-square-lock-remove-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M17.943 17.057L17 18m0 0l-.943.943M17 18l.943.943M17 18l-.943-.943m3.771 3.771a4 4 0 1 1-5.656-5.656a4 4 0 0 1 5.656 5.656"></svg:path><svg:path d="M11.5 21.999L11 22c-1.585 0-3.024-.034-4.44-.1c-1.684-.076-3.067-1.385-3.292-3.055C3.12 17.755 3 16.638 3 15.5s.121-2.255.268-3.345c.225-1.67 1.608-2.979 3.292-3.056C7.976 9.034 9.415 9 11 9s3.024.034 4.44.1c1.456.066 2.608 1.054 3.06 2.4M6.5 9V6.5a4.5 4.5 0 0 1 9 0V9"></svg:path></svg:g>`,
})
export class HugeiconsSquareLockRemove02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
