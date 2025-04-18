import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[guidanceRadiationIcon],svg[guidance-radiation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M13.5 12a1.5 1.5 0 1 0-3 0a1.5 1.5 0 0 0 3 0Zm-13 0A11.56 11.56 0 0 1 6.249 2l3.75 6.535A4 4 0 0 0 8 12zm9.5 3.465L6.25 21.96A11.45 11.45 0 0 0 12 23.5a11.44 11.44 0 0 0 5.75-1.54L14 15.465A4 4 0 0 1 12 16a4 4 0 0 1-2-.535ZM16 12h7.5a11.56 11.56 0 0 0-5.749-10l-3.75 6.535A4 4 0 0 1 16 12Z"></svg:path>`,
})
export class GuidanceRadiationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
