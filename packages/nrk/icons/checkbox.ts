import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[nrkCheckboxIcon],svg[nrk-checkbox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M20 4H4v16h16zm-2 2H6v12h12z" clip-rule="evenodd" opacity=".5"></svg:path>`,
})
export class NrkCheckboxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
