import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[humbleiconsCreativeCommonsIcon],svg[humbleicons-creative-commons-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 10.333c-.313-.25-.703-.333-1.125-.333C7.839 10 7 10.895 7 12s.84 2 1.875 2c.422 0 .812-.082 1.125-.333m6-3.334c-.313-.25-.703-.333-1.125-.333c-1.036 0-1.875.895-1.875 2s.84 2 1.875 2c.422 0 .812-.082 1.125-.333M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0"></svg:path>`,
})
export class HumbleiconsCreativeCommonsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
