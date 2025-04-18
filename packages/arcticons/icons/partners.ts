import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsPartnersIcon],svg[arcticons-partners-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="17.52" cy="38.203" r="5.297" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17.794 27.42c-.353-3.389 2.944-7.592 7.836-9.599c7.64-3.134 10.148-4.33 10.148-8.267c0-2.82-1.646-5.054-6.465-5.054S12.27 12.257 17.794 27.42"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M22.662 10.328c1.822-2.116 3.879-3.38 8.052-3.6m-13.85 28.479c-1.49.243-2.733 1.283-2.821 2.919"></svg:path>`,
})
export class ArcticonsPartnersIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
