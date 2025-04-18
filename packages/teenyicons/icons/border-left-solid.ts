import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsBorderLeftSolidIcon],svg[teenyicons-border-left-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1 14V1h1v13zM5 2H4V1h1zm3 0H7V1h1zm3 0h-1V1h1zm3 0h-1V1h1zM8 5H7V4h1zm6 0h-1V4h1zM5 8H4V7h1zm3 0H7V7h1zm3 0h-1V7h1zm3 0h-1V7h1zm-6 3H7v-1h1zm6 0h-1v-1h1zm-9 3H4v-1h1zm3 0H7v-1h1zm3 0h-1v-1h1zm3 0h-1v-1h1z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsBorderLeftSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
