import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonIbmConsultingAdvantageApplicationIcon],svg[carbon-ibm-consulting-advantage-application-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26 28H6c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h22v2H6v20h20V8h2v18c0 1.1-.9 2-2 2M15 10h-5v5h5zm7 0h-5v5h5zm-7 7h-5v5h5zm7 0h-5v5h5z"></svg:path>`,
})
export class CarbonIbmConsultingAdvantageApplicationIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
