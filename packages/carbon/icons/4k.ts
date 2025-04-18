import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbon4kIcon],svg[carbon-4k-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 11.03v4h-2v-4H8v6h4v4h2v-10zm12.19 0H22l-3 4.39v-4.39h-2v10h2V18.3l.91-1.33L22 21.03h2.19l-2.99-5.62z"></svg:path><svg:path fill="currentColor" d="M28 26H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h24a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2M4 8v16h24V8Z"></svg:path>`,
})
export class Carbon4kIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
