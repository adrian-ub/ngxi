import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pajamasFaceUnhappyIcon],svg[pajamas-face-unhappy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 14.5a6.5 6.5 0 1 0 0-13a6.5 6.5 0 0 0 0 13M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m0-7a3 3 0 0 0-3 3h6a3 3 0 0 0-3-3M6.002 5a1.5 1.5 0 0 0-1.3.747a.5.5 0 1 0 .866.502a.5.5 0 0 1 .865 0a.5.5 0 0 0 .866-.5A1.5 1.5 0 0 0 6.002 5m3.25.2a1.5 1.5 0 0 1 2.047.55a.5.5 0 1 1-.866.5a.5.5 0 0 0-.865-.001a.5.5 0 1 1-.865-.502a1.5 1.5 0 0 1 .55-.547Z" clip-rule="evenodd"></svg:path>`,
})
export class PajamasFaceUnhappyIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
