import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsDeathAlt2NegativeIcon],svg[healthicons-death-alt2-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsDeathAlt2Negative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM16.01 4l16 .013l4.99 13L31.978 44l-16-.017L11 16.992zM23 17.997V26h2v-8.003h3v-2h-3V13h-2v2.997h-3v2z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsDeathAlt2Negative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsDeathAlt2NegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
