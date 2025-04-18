import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[nrkMediaAgelimitAIcon],svg[nrk-media-agelimit-a-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.6 6.7L7 17.4h2l.91-2.9h3.9l.79 2.9h2.3L13.5 6.7zm2.81 6.3l-.81-3c-.2-.68-.42-1.35-.64-2.03l-.66 2.13l-.91 2.9z" clip-rule="evenodd"></svg:path>`,
})
export class NrkMediaAgelimitAIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
