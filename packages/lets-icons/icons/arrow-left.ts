import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsArrowLeftIcon],svg[lets-icons-arrow-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m4 12l-.707-.707l-.707.707l.707.707zm15 1a1 1 0 1 0 0-2zM9.293 5.293l-6 6l1.414 1.414l6-6zm-6 7.414l6 6l1.414-1.414l-6-6zM4 13h15v-2H4z"></svg:path>`,
})
export class LetsIconsArrowLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
