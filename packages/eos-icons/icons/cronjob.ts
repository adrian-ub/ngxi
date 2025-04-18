import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[eosIconsCronjobIcon],svg[eos-icons-cronjob-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.021 1.021h6v2h-6zM20.04 7.41l1.434-1.434l-1.414-1.414l-1.433 1.433A8.99 8.99 0 0 0 7.53 5.881l1.42 1.44a7.04 7.04 0 0 1 4.06-1.3l.01.001v6.98l4.953 4.958A7.001 7.001 0 0 1 6.01 13.021h3l-4-4l-4 4h3A9 9 0 1 0 20.04 7.41"></svg:path>`,
})
export class EosIconsCronjobIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
