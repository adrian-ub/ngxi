import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageUserCircleIcon],svg[mage-user-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M12 21.5a9.5 9.5 0 1 0 0-19a9.5 9.5 0 0 0 0 19"></svg:path><svg:path d="M6.374 19.653a6.333 6.333 0 0 1 11.252 0M12 13.056a3.399 3.399 0 1 0 0-6.798a3.399 3.399 0 0 0 0 6.798"></svg:path></svg:g>`,
})
export class MageUserCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
