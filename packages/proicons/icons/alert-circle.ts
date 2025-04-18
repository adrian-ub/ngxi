import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsAlertCircleIcon],svg[proicons-alert-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="12" cy="12" r="9.25" stroke="currentColor" stroke-width="1.5"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M12 12.438v-5"></svg:path><svg:circle cx="1.25" cy="1.25" r="1.25" fill="currentColor" transform="matrix(1 0 0 -1 10.75 17.063)"></svg:circle></svg:g>`,
})
export class ProiconsAlertCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
