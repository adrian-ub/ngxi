import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenFidaIcon],svg[token-fida-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.777 3.313h.46v4.12h-.46zM7.803 14.098l.242.394l-3.482 2.084l-.237-.389zm8.46.072l-.237.393l3.534 2.117l.237-.388z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M7.737 9.645L12 7.263l4.263 2.382v4.714L12 16.736l-4.263-2.378zm.474.209L12 7.736l3.789 2.118v4.187l-3.785 2.222l-3.794-2.222z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M11.768 11.863h.459v9h-.46z"></svg:path><svg:path fill="currentColor" d="m12.284 11.864l-.237.388l-7.82-4.476l.236-.389z"></svg:path><svg:path fill="currentColor" d="m11.763 11.864l.237.388l7.816-4.476l-.237-.389z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M3.947 7.524L12 3l8.053 4.524v8.957L12 21l-8.053-4.519zm.474.213L12 3.474l7.579 4.263v8.526L12 20.526l-7.579-4.263z" clip-rule="evenodd"></svg:path>`,
})
export class TokenFidaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
