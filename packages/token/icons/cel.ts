import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenCelIcon],svg[token-cel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.633 5.912c.154.233.164.698-.074 1.043c-.244.344-.9.566-1.43.053c-1.381-1.335-3.499-1.594-4.489-1.594A6.61 6.61 0 0 0 4.837 12c.053 2.732 1.9 6.586 6.803 6.586c1.376 0 3.685-.593 4.85-1.81c.2-.212.92-.08 1.175.237c.26.318.185 1.06-.106 1.308a9.32 9.32 0 0 1-5.924 2.15C6.87 20.47 3 16.68 3 12s3.865-8.47 8.64-8.47c3.97 0 5.892 2.228 5.993 2.382"></svg:path><svg:path fill="currentColor" d="M19.412 10.942a1.588 1.588 0 1 0 0-3.176a1.588 1.588 0 0 0 0 3.176"></svg:path><svg:path fill="currentColor" d="M19.411 9.883a.53.53 0 1 0 0-1.059a.53.53 0 0 0 0 1.059"></svg:path>`,
})
export class TokenCelIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
