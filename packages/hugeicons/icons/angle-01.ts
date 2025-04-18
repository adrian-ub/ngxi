import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsAngle01Icon],svg[hugeicons-angle-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M21 20H6.473c-2.106 0-3.16 0-3.421-.617c-.262-.618.482-1.344 1.972-2.797L17.924 4"></svg:path><svg:path d="M11 20c0-2.648-1.226-4.934-3-6"></svg:path></svg:g>`,
})
export class HugeiconsAngle01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
