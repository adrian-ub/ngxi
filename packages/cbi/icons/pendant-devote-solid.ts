import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cbiPendantDevoteSolidIcon],svg[cbi-pendant-devote-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.58 8c-.04-1.31-1.52-3.44-1.94-4.03l-.05-2.33a.506.506 0 0 0-.5-.49h-2.16c-.27 0-.49.22-.5.49l-.05 2.33C9.94 4.55 8.47 6.69 8.42 8l-.44 13.13c-.01.22.13.42.34.49c.02.01.16.05.38.11c0 .07 0 .14.03.2c.11.25.67 1.09 3.27 1.09s3.16-.83 3.27-1.09c.03-.06.03-.13.03-.2c.22-.06.36-.1.38-.11c.21-.07.35-.27.34-.49z"></svg:path>`,
})
export class CbiPendantDevoteSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
