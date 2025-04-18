import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[psRightIcon],svg[ps-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 388q8 4 15 4q11 0 17-6l162-186L41 14Q26-1 11 12Q-4 29 9 42l137 156L9 354q-13 19 0 34"></svg:path>`,
})
export class PsRightIcon {
  readonly viewBox = input("0 0 208 456")
  readonly width = input("0.46em")
  readonly height = input("1em")
}
