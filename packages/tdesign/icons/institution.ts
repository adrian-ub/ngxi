import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignInstitutionIcon],svg[tdesign-institution-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 .856l10 5.556V9H2V6.412zM5.06 7h13.88L12 3.144zM7 11v8H5v-8zm6 0v8h-2v-8zm6 0v8h-2v-8zM2 21h20v2H2z"></svg:path>`,
})
export class TdesignInstitutionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
