import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiRakeIcon],svg[mdi-rake-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.5 17.05L9.43 16L22.07 3.35l-1.41-1.42L8 14.58L6.95 13.5c-.78-.77-2.05-.77-2.83 0L2 15.64l.71.7l2.12-2.12l.71.71l-2.13 2.12l.71.71l2.12-2.12l.71.7l-2.12 2.12l.71.71l2.12-2.12l.7.71l-2.12 2.12l.71.71l2.12-2.13l.71.71l-2.12 2.12l.7.71l2.14-2.12c.77-.78.77-2.05 0-2.83"></svg:path>`,
})
export class MdiRakeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
