import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsNpmSolidIcon],svg[teenyicons-npm-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M0 4h15v7H7v2H4v-2H0zm4 6V5H1v5h1V6h1v4zm1-5v7h1v-2h2V5zm4 0v5h1V6h1v4h1V6h1v4h1V5zM6 9V6h1v3z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsNpmSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
