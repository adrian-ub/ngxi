import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsDirectionSolidIcon],svg[teenyicons-direction-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M.697.04A.5.5 0 0 0 .04.697l6 14a.5.5 0 0 0 .934-.039l1.921-5.763l5.763-1.92a.5.5 0 0 0 .039-.935z"></svg:path>`,
})
export class TeenyiconsDirectionSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
