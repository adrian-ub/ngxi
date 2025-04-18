import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsPlug01Icon],svg[hugeicons-plug-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15.5 2v4m-7 0V2M6.004 7.613C5.937 6.743 6.64 6 7.53 6h8.94c.89 0 1.593.743 1.526 1.613l-.184 2.379a9.9 9.9 0 0 1-1.68 4.785l-.6.885A3.08 3.08 0 0 1 12.983 17h-1.968a3.08 3.08 0 0 1-2.547-1.338l-.601-.885a9.9 9.9 0 0 1-1.68-4.785zM12 17v5M11 9h2" color="currentColor"></svg:path>`,
})
export class HugeiconsPlug01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
