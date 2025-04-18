import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ouiAppsIcon],svg[oui-apps-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 4V2h2v2zm5 0V2h2v2zm5 0V2h2v2zM2 9V7h2v2zm5 0V7h2v2zm5 0V7h2v2zM2 14v-2h2v2zm5 0v-2h2v2zm5 0v-2h2v2z"></svg:path>`,
})
export class OuiAppsIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
