import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiWashingMachineAlertIcon],svg[mdi-washing-machine-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.83 11.17c1.56 1.56 1.56 4.1 0 5.66s-4.1 1.56-5.66 0zM4 2h12a2 2 0 0 1 2 2v16c0 1.11-.89 2-2 2H4a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2m1 2c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1s-.45-1-1-1m3 0c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1s-.45-1-1-1m2 4c-3.31 0-6 2.69-6 6s2.69 6 6 6s6-2.69 6-6s-2.69-6-6-6m10 7h2v2h-2zm0-8h2v6h-2z"></svg:path>`,
})
export class MdiWashingMachineAlertIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
