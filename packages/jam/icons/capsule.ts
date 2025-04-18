import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamCapsuleIcon],svg[jam-capsule-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 9V5a3 3 0 1 0-6 0v4zm0 2H2v4a3 3 0 0 0 6 0zM5 0a5 5 0 0 1 5 5v10a5 5 0 0 1-10 0V5a5 5 0 0 1 5-5"></svg:path>`,
})
export class JamCapsuleIcon {
  readonly viewBox = input("-7 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
