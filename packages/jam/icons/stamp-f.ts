import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamStampFIcon],svg[jam-stamp-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 7.465a4 4 0 1 1 4 0V14H8zM2 15h16a2 2 0 0 1 2 2v2H0v-2a2 2 0 0 1 2-2"></svg:path>`,
})
export class JamStampFIcon {
  readonly viewBox = input("-2 -2.5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
