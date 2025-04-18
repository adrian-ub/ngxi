import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiBeatsIcon],svg[mdi-beats-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M7 12a5 5 0 0 0 5 5a5 5 0 0 0 5-5a5 5 0 0 0-5-5c-1.13 0-2.16.37-3 1V2.46c.95-.3 1.95-.46 3-.46a10 10 0 0 1 10 10a10 10 0 0 1-10 10A10 10 0 0 1 2 12c0-3.7 2-6.93 5-8.66V12m5-3a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3z" fill="currentColor"></svg:path>`,
})
export class MdiBeatsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
