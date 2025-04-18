import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamCapsuleFIcon],svg[jam-capsule-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 9.858H0v-4a5 5 0 1 1 10 0zm0 2v4a5 5 0 0 1-10 0v-4z"></svg:path>`,
})
export class JamCapsuleFIcon {
  readonly viewBox = input("-7 -1.5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
