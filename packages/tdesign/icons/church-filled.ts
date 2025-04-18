import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignChurchFilledIcon],svg[tdesign-church-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 1v2H9v2h2v.98l-5 3.5V12H2v10h6.5v-4.5a3.5 3.5 0 1 1 7 0V22H22V12h-4V9.48l-5-3.5V5h2V3h-2V1zM6 20H4v-6h2zm12 0v-6h2v6z"></svg:path><svg:path fill="currentColor" d="M12 16a1.5 1.5 0 0 0-1.5 1.5V22h3v-4.5A1.5 1.5 0 0 0 12 16"></svg:path>`,
})
export class TdesignChurchFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
