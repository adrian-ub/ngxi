import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonNavaidDmeIcon],svg[carbon-navaid-dme-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 20a4 4 0 1 1 4-4a4.005 4.005 0 0 1-4 4m0-6a2 2 0 1 0 2 2a2 2 0 0 0-2-2"></svg:path><svg:path fill="currentColor" d="M24 24H8a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2M8 10v12h16V10Z"></svg:path><svg:path fill="currentColor" d="M28 28H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h24a2 2 0 0 1 2 2v20a2 2 0 0 1-2 2M4 6v20h24V6Z"></svg:path>`,
})
export class CarbonNavaidDmeIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
