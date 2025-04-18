import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uitDirectionIcon],svg[uit-direction-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.854 9.854L12 6.707l3.146 3.147a.5.5 0 0 0 .707 0a.5.5 0 0 0 0-.707l-3.5-3.5a.5.5 0 0 0-.706 0l-3.5 3.5a.5.5 0 0 0 .707.707m6.292 4.292L12 17.293l-3.147-3.146a.5.5 0 0 0-.707.707l3.5 3.5a.5.5 0 0 0 .707 0l3.5-3.5a.5.5 0 0 0-.707-.708"></svg:path>`,
})
export class UitDirectionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
