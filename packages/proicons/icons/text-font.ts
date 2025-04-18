import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsTextFontIcon],svg[proicons-text-font-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m20.08 21.25l-2.133-4.842m0 0H10.27m7.677 0l-3.268-7.42a.617.617 0 0 0-1.142 0l-3.267 7.42m0 0L8.137 21.25m-1.174 0h2.812m8.663 0h2.812M4.423 8.82L2.75 12.584M4.423 8.82h6.021L7.881 3.05a.485.485 0 0 0-.895 0z"></svg:path>`,
})
export class ProiconsTextFontIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
