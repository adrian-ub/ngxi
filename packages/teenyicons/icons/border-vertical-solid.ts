import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsBorderVerticalSolidIcon],svg[teenyicons-border-vertical-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 2H1V1h1zm3 0H4V1h1zm2 12V1h1v13zm4-12h-1V1h1zm3 0h-1V1h1zM2 5H1V4h1zm12 0h-1V4h1zM2 8H1V7h1zm3 0H4V7h1zm6 0h-1V7h1zm3 0h-1V7h1zM2 11H1v-1h1zm12 0h-1v-1h1zM2 14H1v-1h1zm3 0H4v-1h1zm6 0h-1v-1h1zm3 0h-1v-1h1z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsBorderVerticalSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
