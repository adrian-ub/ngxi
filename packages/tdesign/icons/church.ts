import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignChurchIcon],svg[tdesign-church-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 1v2H9v2h2v.98l-5 3.5V12H2v10h20V12h-4V9.48l-5-3.5V5h2V3h-2V1zm1 6.72l4 2.8V20h-1v-4a3 3 0 1 0-6 0v4H8v-9.48zM6 20H4v-6h2zm5 0v-4a1 1 0 1 1 2 0v4zm7 0v-6h2v6z"></svg:path>`,
})
export class TdesignChurchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
