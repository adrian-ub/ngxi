import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiLightAlertIcon],svg[mdi-light-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 21L11.5 2.81L22 21zm19.27-1L11.5 4.81L2.73 20zM11 14v-4h1v4zm0 2h1v2h-1z"></svg:path>`,
})
export class MdiLightAlertIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
