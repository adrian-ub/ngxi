import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsFlipHorizontalSolidIcon],svg[teenyicons-flip-horizontal-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.237.075a.5.5 0 0 1 .487-.022l8 4A.5.5 0 0 1 11.5 5h-8a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .237-.425M0 8h15V7H0zm3.5 2a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 .724.447l8-4A.5.5 0 0 0 11.5 10z"></svg:path>`,
})
export class TeenyiconsFlipHorizontalSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
