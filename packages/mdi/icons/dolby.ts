import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiDolbyIcon],svg[mdi-dolby-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 5v14h20V5zm4 12H4V7h2c2.86.09 5.1 2.33 5 5c.1 2.67-2.14 4.91-5 5m14 0h-2c-2.86-.09-5.1-2.33-5-5c-.1-2.67 2.14-4.91 5-5h2z"></svg:path>`,
})
export class MdiDolbyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
