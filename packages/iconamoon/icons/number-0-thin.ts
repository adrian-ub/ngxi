import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonNumber0ThinIcon],svg[iconamoon-number-0-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="M12 20a5 5 0 0 0 5-5V9A5 5 0 0 0 7 9v6a5 5 0 0 0 5 5Z"></svg:path>`,
})
export class IconamoonNumber0ThinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
