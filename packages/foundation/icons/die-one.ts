import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[foundationDieOneIcon],svg[foundation-die-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M83.921 23.292a7.44 7.44 0 0 0-7.213-7.264v-.011H23.292v.008a7.443 7.443 0 0 0-7.267 7.267h-.009v53.416h.009a7.44 7.44 0 0 0 7.267 7.267v.008h53.416v-.009a7.44 7.44 0 0 0 7.267-7.267h.009V23.292zM50 57.621a7.621 7.621 0 1 1 0-15.24a7.621 7.621 0 0 1 0 15.24"></svg:path>`,
})
export class FoundationDieOneIcon {
  readonly viewBox = input("0 0 100 100")
  readonly width = input("1em")
  readonly height = input("1em")
}
