import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsLinkSolidIcon],svg[teenyicons-link-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.318.975a3.328 3.328 0 1 1 4.707 4.707l-3.171 3.172l-.708-.708l3.172-3.171a2.328 2.328 0 1 0-3.293-3.293L6.854 4.854l-.708-.708zm1.536 3.879l-6 6l-.708-.708l6-6zm-6 2l-3.172 3.171a2.329 2.329 0 0 0 3.293 3.293l3.171-3.172l.708.708l-3.172 3.171A3.328 3.328 0 1 1 .975 9.318l3.171-3.172z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsLinkSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
