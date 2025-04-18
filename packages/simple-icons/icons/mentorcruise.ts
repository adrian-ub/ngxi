import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsMentorcruiseIcon],svg[simple-icons-mentorcruise-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12s12-5.373 12-12S18.627 0 12 0m-.387 3.791v8.08H6.947q2.335-4.04 4.666-8.08m.774 0q2.331 4.04 4.666 8.08h-4.666Zm-9.244 8.854h17.714l-1.68 2.91H4.823Zm2.125 3.683h13.464l-1.68 2.908H6.948Z"></svg:path>`,
})
export class SimpleIconsMentorcruiseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
