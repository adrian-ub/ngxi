import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsBorderAllSolidIcon],svg[teenyicons-border-all-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1 1h13v13H1zm1 1v5h5V2zm6 0v5h5V2zm5 6H8v5h5zm-6 5V8H2v5z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsBorderAllSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
