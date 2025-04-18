import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsToothLightIcon],svg[lets-icons-tooth-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M12 17.5c1.5 0 2.5 3 3.5 3c2 0 5-8.5 5-12.5c0-1.919-1.5-3.5-3.5-3.5s-3.5 2-5 2s-3-2-5-2S3.5 6 3.5 8c0 4 3 12.5 5 12.5c1 0 2-3 3.5-3Z"></svg:path>`,
})
export class LetsIconsToothLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
