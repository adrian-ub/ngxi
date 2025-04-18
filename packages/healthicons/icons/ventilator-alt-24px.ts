import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsVentilatorAlt24pxIcon],svg[healthicons-ventilator-alt-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 2H4v12h7v1h-1a1 1 0 1 0 0 2h1v1H4v2h2a1 1 0 1 0 0 2a1 1 0 0 0 0-2h12a1 1 0 1 0 0 2a1 1 0 0 0 0-2h2v-2h-7v-1h1a1 1 0 1 0 0-2h-1v-1h7V8.5h-2.76l-2.274 2.923l-2.594-3.631L11.164 9H6V7h4.336l2.292-2.292l2.406 3.37L16.261 6.5H20z"></svg:path>`,
})
export class HealthiconsVentilatorAlt24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
