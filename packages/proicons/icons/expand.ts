import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsExpandIcon],svg[proicons-expand-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 20.25h4.25a4 4 0 0 0 4-4v-2.5M12 20.25H7.75a4 4 0 0 1-4-4V12M12 20.25V15a3 3 0 0 0-3-3H3.75m0 0V7.75a4 4 0 0 1 4-4h2.5m3.5 0h5.5c.276 0 .526.112.707.293m.293 6.207v-5.5a1 1 0 0 0-.293-.707M13.75 10.25l5.5-5.5l.707-.707"></svg:path>`,
})
export class ProiconsExpandIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
