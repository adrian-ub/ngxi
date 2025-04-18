import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsPinIcon],svg[arcticons-pin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 17.83a4.35 4.35 0 0 0 6.17 0l9.25 9.25l-3.09 3.09a4.36 4.36 0 0 0 0 6.16l7.71-7.71L39.42 42.5h3.08v-3.08L28.62 25.54L30.17 24l3.08-3.08l3.08-3.09a4.36 4.36 0 0 0-6.16 0l-3.09 3.09l-9.25-9.25a4.35 4.35 0 0 0 0-6.17l-3.08 3.08l-6.17 6.17Zm23.12 7.71l-3.08 3.08"></svg:path>`,
})
export class ArcticonsPinIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
