import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsMaximize01Icon],svg[hugeicons-maximize-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.926 22.252V20.69c0-.403.127-.794.338-1.138c1.494-2.428 1.964-5.033 1.636-6.048c-1.043-2.163-4.524-3.014-6.14-3.217l1.037-5.165c.174-.82-.446-1.644-1.383-1.842s-1.84.306-2.013 1.125l-2.055 9.676l-2.571-1.64s-1.295-1.036-2.335 0c-1.039 1.037 0 2.328 0 2.328l3.909 5.008c.251.322.398.713.42 1.12l.071 1.32M9.867 4.361s.245-2.218 0-2.46m0 0c-.319-.313-2.538-.05-2.538-.05m2.538.05L6.897 4.84M2.11 7.088s-.246 2.218 0 2.46m0 0c.318.313 2.537.049 2.537.049m-2.537-.05L5.078 6.61" color="currentColor"></svg:path>`,
})
export class HugeiconsMaximize01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
