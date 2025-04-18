import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenVstaIcon],svg[token-vsta-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3 12a9 9 0 1 1 18 0a9 9 0 0 1-18 0m1.588 0a7.412 7.412 0 1 1 14.824 0a7.412 7.412 0 0 1-14.824 0" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M12.036 19.412L5.646 7.765h6.353l3.176 5.824z"></svg:path><svg:path fill="currentColor" fill-opacity=".6" d="M18.353 7.765H12l3.177 5.824z"></svg:path>`,
})
export class TokenVstaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
