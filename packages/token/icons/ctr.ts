import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenCtrIcon],svg[token-ctr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.701 11.47a5.372 5.372 0 0 1-4.982 7.305c-2.954 0-5.347-2.403-5.347-5.363a5.352 5.352 0 0 1 6.168-5.305l1.398-4.203A8.455 8.455 0 0 0 3 11.999c0 4.68 3.78 8.47 8.439 8.47a8.454 8.454 0 0 0 8.418-9z"></svg:path><svg:path fill="currentColor" d="M18.088 10.41a2.912 2.912 0 1 0 0-5.822a2.912 2.912 0 0 0 0 5.823"></svg:path>`,
})
export class TokenCtrIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
