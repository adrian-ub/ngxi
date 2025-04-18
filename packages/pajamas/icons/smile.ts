import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pajamasSmileIcon],svg[pajamas-smile-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14.5 8a6.5 6.5 0 1 1-13 0a6.5 6.5 0 0 1 13 0M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.252 4.7a1.5 1.5 0 0 1 2.047.55a.5.5 0 0 1-.866.5a.5.5 0 0 0-.865-.001a.5.5 0 1 1-.865-.502a1.5 1.5 0 0 1 .55-.547ZM8 12a4 4 0 0 0 4-4H4a4 4 0 0 0 4 4m1.252-7.3a1.5 1.5 0 0 1 2.047.55a.5.5 0 1 1-.866.5a.5.5 0 0 0-.865-.001a.5.5 0 1 1-.865-.502a1.5 1.5 0 0 1 .55-.547Z" clip-rule="evenodd"></svg:path>`,
})
export class PajamasSmileIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
