import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiSkateboardIcon],svg[openmoji-skateboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="51" cy="47.999" r="3"></svg:circle><svg:circle cx="21" cy="47.999" r="3"></svg:circle><svg:path fill="#61b2e4" d="M56.408 43H15.592c-2.898 0-5.451-3.486-5.47-3.521A1 1 0 0 1 10 39v-2a1 1 0 0 1 1.786-.618C12.321 37.06 14.17 39 15.592 39h40.816c1.433 0 3.273-1.937 3.804-2.615A1 1 0 0 1 62 37v2a1 1 0 0 1-.21.614c-.271.347-2.717 3.386-5.382 3.386M11 39.001"></svg:path><svg:g fill="#d22f27"><svg:circle cx="51" cy="47.999" r="3"></svg:circle><svg:circle cx="21" cy="47.999" r="3"></svg:circle></svg:g><svg:path d="M56.408 43H15.592c-2.86 0-5.446-3.477-5.466-3.513a1 1 0 0 1 1.696-1.054c.526.696 2.364 2.567 3.77 2.567h40.816c1.433 0 3.273-1.937 3.804-2.615a1 1 0 0 1 1.577 1.23C61.52 39.96 59.073 43 56.41 43"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M52 46.267a2 2 0 1 1-2 3.464m-28-3.464a2 2 0 1 1-2 3.464"></svg:path>`,
})
export class OpenmojiSkateboardIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
