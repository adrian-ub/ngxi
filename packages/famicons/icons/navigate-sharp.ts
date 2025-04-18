import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[famiconsNavigateSharpIcon],svg[famicons-navigate-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M480 32L32 240h240v240z"></svg:path>`,
})
export class FamiconsNavigateSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
