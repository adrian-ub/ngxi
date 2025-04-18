import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gridiconsHeadingIcon],svg[gridicons-heading-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 20h-3v-6H9v6H6V5.009h3V11h6V5.009h3z"></svg:path>`,
})
export class GridiconsHeadingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
