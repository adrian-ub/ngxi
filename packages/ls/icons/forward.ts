import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsForwardIcon],svg[ls-forward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M494 38v124C-36 162 1 656 1 656c104-345 493-245 493-245v127l274-254z"></svg:path>`,
})
export class LsForwardIcon {
  readonly viewBox = input("0 0 768 656")
  readonly width = input("1.18em")
  readonly height = input("1em")
}
