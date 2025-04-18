import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorHome48Icon],svg[fluent-color-home-48-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorHome480)" d="M18.067 27h12v16h-12z"></svg:path><svg:path fill="url(#fluentColorHome481)" d="M26.461 7.855a3.78 3.78 0 0 0-4.787 0L8.499 18.597a3.91 3.91 0 0 0-1.432 3.031v17.485C7.067 41.26 8.78 43 10.892 43h8.175V30.5a2.5 2.5 0 0 1 2.5-2.5h5a2.5 2.5 0 0 1 2.5 2.5V43h8.175c2.113 0 3.825-1.74 3.825-3.887V21.628a3.91 3.91 0 0 0-1.43-3.031z"></svg:path><svg:path fill="url(#fluentColorHome482)" fill-rule="evenodd" d="m24.068 9.329l-16 13.215a2.054 2.054 0 0 1-2.852-.262a1.956 1.956 0 0 1 .267-2.794L22.28 5.628a2.83 2.83 0 0 1 3.523-.024l16.805 13.588a1.957 1.957 0 0 1 .307 2.79a2.054 2.054 0 0 1-2.848.3z" clip-rule="evenodd"></svg:path><svg:defs><svg:lineargradient id="fluentColorHome480" x1="24.067" x2="13.481" y1="27" y2="44.65" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#944600"></svg:stop><svg:stop offset="1" stop-color="#CD8E02"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorHome481" x1="10.313" x2="45.173" y1="5.24" y2="32" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FFD394"></svg:stop><svg:stop offset="1" stop-color="#FFB357"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorHome482" x1="17.817" x2="25.308" y1=".725" y2="22.452" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FF921F"></svg:stop><svg:stop offset="1" stop-color="#EB4824"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorHome48Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
