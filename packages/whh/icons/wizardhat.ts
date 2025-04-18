import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhWizardhatIcon],svg[whh-wizardhat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960 1024H64q-26 0-45-19T0 959.5t19-45T64 896h192l142-615l-142 39h-32q-13 0-22.5-9.5T192 288t9.5-22.5T224 256L512 0q26 0 45 19t19 45l192 832h192q27 0 45.5 18.5T1024 960t-18.5 45.5T960 1024"></svg:path>`,
})
export class WhhWizardhatIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
