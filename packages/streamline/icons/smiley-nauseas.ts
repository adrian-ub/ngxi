import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineSmileyNauseasIcon],svg[streamline-smiley-nauseas-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M4.75 5.5a.25.25 0 0 1 0-.5m0 .5a.25.25 0 0 0 0-.5m4.5.5a.25.25 0 0 1 0-.5m0 .5a.25.25 0 0 0 0-.5"></svg:path><svg:path d="M7 13.5a6.5 6.5 0 1 0 0-13a6.5 6.5 0 0 0 0 13"></svg:path><svg:path d="M4.899 9.194c.235-.325.987-.975 2.114-.975c1.128 0 1.88.65 2.115.975"></svg:path><svg:path d="M4.08 8.185c.773.336 1.01 1.242.702 2.084M9.92 8.185c-.773.336-1.01 1.242-.702 2.084"></svg:path></svg:g>`,
})
export class StreamlineSmileyNauseasIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
