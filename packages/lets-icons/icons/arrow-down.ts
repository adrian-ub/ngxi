import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsArrowDownIcon],svg[lets-icons-arrow-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 20l-.707.707l.707.707l.707-.707zm1-15a1 1 0 1 0-2 0zm-7.707 9.707l6 6l1.414-1.414l-6-6zm7.414 6l6-6l-1.414-1.414l-6 6zM13 20V5h-2v15z"></svg:path>`,
})
export class LetsIconsArrowDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
