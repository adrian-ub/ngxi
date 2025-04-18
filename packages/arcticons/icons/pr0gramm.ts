import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsPr0grammIcon],svg[arcticons-pr0gramm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m10.12 7l17 17l-17 17l-4.62-4.67L17.83 24L5.5 11.67ZM24 41h18.5v-6.21H24Z"></svg:path>`,
})
export class ArcticonsPr0grammIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
