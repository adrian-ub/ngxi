import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhBurstmodeIcon],svg[whh-burstmode-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M992.268 768h-704q-13 0-22.5-9.5t-9.5-22.5v-32h704V256h32q13 0 22.5 9.5t9.5 22.5v448q0 13-9.5 22.5t-22.5 9.5m-128-128h-704q-13 0-22.5-9.5t-9.5-22.5v-32h704V128h32q13 0 22.5 9.5t9.5 22.5v448q0 13-9.5 22.5t-22.5 9.5m-128-128h-704q-13 0-22.5-9.5T.268 480V32q0-13 9.5-22.5t22.5-9.5h704q13 0 22.5 9.5t9.5 22.5v448q0 13-9.5 22.5t-22.5 9.5m-32-448h-640v384h640z"></svg:path>`,
})
export class WhhBurstmodeIcon {
  readonly viewBox = input("0 0 1025 768")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
