import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsBorderOuterSolidIcon],svg[teenyicons-border-outer-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1 1h13v13H1zm1 1v11h11V2zm6 3H7V4h1zM5 8H4V7h1zm3 0H7V7h1zm3 0h-1V7h1zm-3 3H7v-1h1z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsBorderOuterSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
