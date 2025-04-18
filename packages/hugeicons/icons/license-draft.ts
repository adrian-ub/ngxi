import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsLicenseDraftIcon],svg[hugeicons-license-draft-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20.002 11v-1c0-3.771 0-5.657-1.24-6.828C17.52 2 15.524 2 11.532 2h-1.06c-3.993 0-5.99 0-7.23 1.172S2.002 6.229 2.002 10v4c0 3.771 0 5.657 1.24 6.828S6.48 22 10.472 22h.53m-4-15h8m-8 5h8m5.86 2.44l.695.692a1.497 1.497 0 0 1 0 2.121l-3.638 3.696a2 2 0 0 1-1.05.551l-2.254.488a.5.5 0 0 1-.597-.593l.48-2.235c.074-.397.267-.762.554-1.047l3.683-3.674a1.507 1.507 0 0 1 2.127 0" color="currentColor"></svg:path>`,
})
export class HugeiconsLicenseDraftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
