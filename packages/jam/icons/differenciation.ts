import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamDifferenciationIcon],svg[jam-differenciation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 .674a7 7 0 1 1 0 12.653A7 7 0 1 1 10 .673ZM10 3a5 5 0 0 0-2 4c0 1.636.786 3.088 2 4a5 5 0 0 0 2-4a5 5 0 0 0-2-4"></svg:path>`,
})
export class JamDifferenciationIcon {
  readonly viewBox = input("0 0 20 14")
  readonly width = input("1.43em")
  readonly height = input("1em")
}
