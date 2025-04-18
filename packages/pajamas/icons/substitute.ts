import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pajamasSubstituteIcon],svg[pajamas-substitute-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m0 5l.53-.53l2.25-2.25a.75.75 0 0 1 1.06 1.06l-.969.97h10.38a.75.75 0 0 1 0 1.5H2.87l.97.97a.75.75 0 0 1-1.06 1.06L.53 5.53zm16 6l-.53-.53l-2.25-2.25a.75.75 0 1 0-1.061 1.06l.97.97H2.748a.75.75 0 0 0 0 1.5h10.38l-.97.97a.75.75 0 1 0 1.06 1.06l2.25-2.25z" clip-rule="evenodd"></svg:path>`,
})
export class PajamasSubstituteIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
