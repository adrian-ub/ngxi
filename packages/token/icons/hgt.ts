import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenHgtIcon],svg[token-hgt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.062 8.08V3L12 6.703zm0 7.85V21L12 17.296zm0-7.868H3l3.697 4.008zm7.875 0H21l-3.688 3.875zm0 .018V3L12 6.703zm0 7.854V21L12 17.296zm-7.875.003H3l3.715-3.859zm7.875 0H21l-3.71-3.958zM12 14.25a2.25 2.25 0 1 0 0-4.5a2.25 2.25 0 0 0 0 4.5"></svg:path>`,
})
export class TokenHgtIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
