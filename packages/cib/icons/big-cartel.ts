import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cibBigCartelIcon],svg[cib-big-cartel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 17.421v-1.339c0-.837.339-1.676 1.172-2.009l10.391-6.537c.667-.333 1.005-1.172 1.005-2.009V0L16 8.041L3.432 0v16.921c0 4.527 2.016 8.376 5.36 10.552L15.833 32l7.041-4.527c3.349-2.009 5.36-5.859 5.36-10.552V9.38z"></svg:path>`,
})
export class CibBigCartelIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
