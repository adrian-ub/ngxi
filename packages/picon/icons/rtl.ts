import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconRtlIcon],svg[picon-rtl-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 6v1H3V6m5-2v1H1V4m7-2v1H4V2m4-2v1H2V0"></svg:path>`,
})
export class PiconRtlIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
