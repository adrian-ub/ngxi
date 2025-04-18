import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsMailSetting01Icon],svg[hugeicons-mail-setting-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="m2 5l6.913 3.925c2.526 1.433 3.648 1.433 6.174 0L22 5"></svg:path><svg:path d="M11 19.49s-.93.024-1.9 0c-3.15-.08-4.724-.12-5.855-1.257s-1.164-2.672-1.23-5.742a69 69 0 0 1 0-2.956c.066-3.07.099-4.605 1.23-5.742c1.131-1.138 2.706-1.177 5.854-1.256c1.94-.05 3.862-.05 5.803 0c3.149.079 4.723.118 5.854 1.256s1.164 2.672 1.23 5.742c.007.357.012.977.014 1.478"></svg:path><svg:path d="M18 20.214V21.5m0-1.286a3.36 3.36 0 0 1-2.774-1.43M18 20.213a3.36 3.36 0 0 0 2.774-1.43M18 13.785c1.157 0 2.176.568 2.774 1.43M18 13.787a3.36 3.36 0 0 0-2.774 1.43M18 13.787V12.5m4 1.929l-1.226.788M14 19.57l1.226-.788M14 14.43l1.226.788M22 19.57l-1.226-.788m0-3.566a3.12 3.12 0 0 1 0 3.566m-5.548-3.566a3.12 3.12 0 0 0 0 3.566"></svg:path></svg:g>`,
})
export class HugeiconsMailSetting01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
