import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSettingError04Icon],svg[hugeicons-setting-error-04-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M17 15v2m.009 2H17m5-2a5 5 0 1 1-10 0a5 5 0 0 1 10 0m-6.971-7.755a3.5 3.5 0 1 0-5.301 4.417"></svg:path><svg:path d="M21.984 10.74c-.024-.54-.387-1.198-1.193-2.588l-1.924-3.316c-.803-1.384-1.205-2.076-1.865-2.456S15.54 2 13.937 2h-3.874c-1.603 0-2.405 0-3.065.38S5.936 3.452 5.133 4.836L3.21 8.152C2.403 9.542 2 10.237 2 11s.403 1.458 1.21 2.848l1.923 3.316c.803 1.384 1.205 2.076 1.865 2.456c.622.3 1 .38 2.602.38"></svg:path></svg:g>`,
})
export class HugeiconsSettingError04Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
