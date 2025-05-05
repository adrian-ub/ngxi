import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconCenterIcon],svg[picon-center-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 6v1H1V6m7-2v1H0V4m6-2v1H2V2m5-2v1H1V0"></svg:path>`,
})
export class PiconCenterIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
