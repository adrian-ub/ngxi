import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsTuringmachineIcon],svg[arcticons-turingmachine-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m4.5 33.75l9.71 7.93V25.83zm9.71 0h19.35a9.16 9.16 0 0 0 9.16-9.16h0a9.3 9.3 0 0 0-.23-2.06m1.01-8.28l-9.71-7.93v15.85z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M33.79 14.25H14.44a9.16 9.16 0 0 0-9.16 9.16h0a9.3 9.3 0 0 0 .23 2.06"></svg:path>`,
})
export class ArcticonsTuringmachineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
