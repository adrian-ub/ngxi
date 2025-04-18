import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsHddIcon],svg[hugeicons-hdd-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M20 14v-4c0-3.771 0-5.657-1.103-6.828S16.02 2 12.471 2h-.942C7.98 2 6.205 2 5.103 3.172S4 6.229 4 10v4c0 3.771 0 5.657 1.103 6.828S7.98 22 11.529 22h.942c3.549 0 5.324 0 6.426-1.172S20 17.771 20 14"></svg:path><svg:path d="M8.8 12.665a4.5 4.5 0 1 0 6.4-6.329a4.5 4.5 0 0 0-6.398 6.329m0 0l3.2-3.2M10 19h4"></svg:path></svg:g>`,
})
export class HugeiconsHddIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
