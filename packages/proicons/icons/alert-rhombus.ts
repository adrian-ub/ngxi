import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsAlertRhombusIcon],svg[proicons-alert-rhombus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.775 14.475a3.5 3.5 0 0 1 0-4.95l5.75-5.75a3.5 3.5 0 0 1 4.95 0l5.75 5.75a3.5 3.5 0 0 1 0 4.95l-5.75 5.75a3.5 3.5 0 0 1-4.95 0z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M12 12.435v-5"></svg:path><svg:circle cx="1.25" cy="1.25" r="1.25" fill="currentColor" transform="matrix(1 0 0 -1 10.75 17.06)"></svg:circle></svg:g>`,
})
export class ProiconsAlertRhombusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
