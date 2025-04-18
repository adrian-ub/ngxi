import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSafetyIcon],svg[arcticons-safety-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.874 26.237L35 24l3.874-2.237a5.5 5.5 0 0 0-5.5-9.526L29.5 14.474V10a5.5 5.5 0 0 0-11 0v4.474l-3.874-2.237a5.5 5.5 0 0 0-5.5 9.526L13 24l-3.874 2.237a5.5 5.5 0 0 0 5.5 9.526l3.874-2.237V38a5.5 5.5 0 0 0 11 0v-4.474l3.874 2.237a5.5 5.5 0 0 0 5.5-9.526M18.5 14.474L35 24m-16.5 9.526L35 24"></svg:path>`,
})
export class ArcticonsSafetyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
