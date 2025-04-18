import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignInstitutionFilledIcon],svg[tdesign-institution-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 .856l10 5.556V9H2V6.412zM2 21h20v2H2zm5-2H5v-8h2zm6 0h-2v-8h2zm6 0h-2v-8h2z"></svg:path>`,
})
export class TdesignInstitutionFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
