import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gridiconsIndentLeftIcon],svg[gridicons-indent-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 20h2V4h-2zM2 11h10.172l-2.086-2.086L11.5 7.5L16 12l-4.5 4.5l-1.414-1.414L12.172 13H2z"></svg:path>`,
})
export class GridiconsIndentLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
