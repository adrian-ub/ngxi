import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsTextLargeIcon],svg[proicons-text-large-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m5.5 19.207l2.321-5.325m0 0h8.358m-8.358 0l3.558-8.16a.669.669 0 0 1 1.242 0l3.558 8.16m0 0l2.321 5.325"></svg:path>`,
})
export class ProiconsTextLargeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
