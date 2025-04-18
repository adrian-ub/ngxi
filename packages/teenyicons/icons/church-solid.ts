import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsChurchSolidIcon],svg[teenyicons-church-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 2V0h1v2h2v1H8v2.21l6.748 3.856l-.496.868L13 9.22V14h2v1h-5v-5H5v5H0v-1h2V9.219l-1.252.715l-.496-.868L7 5.21V3H5V2z"></svg:path><svg:path fill="currentColor" d="M6 15h3v-4H6z"></svg:path>`,
})
export class TeenyiconsChurchSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
