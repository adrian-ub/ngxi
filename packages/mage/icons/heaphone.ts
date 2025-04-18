import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageHeaphoneIcon],svg[mage-heaphone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M8.036 15.964a2.643 2.643 0 1 0-5.286 0v2.643a2.643 2.643 0 0 0 5.286 0zm7.928 2.643a2.643 2.643 0 1 0 5.286 0v-2.643a2.643 2.643 0 0 0-5.286 0z"></svg:path><svg:path d="M21.25 18.607V12a9.25 9.25 0 1 0-18.5 0v6.607"></svg:path></svg:g>`,
})
export class MageHeaphoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
