import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenX2y2Icon],svg[token-x2y2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.426 6.924A7.72 7.72 0 0 0 13.97 4.69c-4.196 0-7.593 3.273-7.593 7.312s3.397 7.311 7.593 7.311a7.7 7.7 0 0 0 5.456-2.233a9 9 0 1 1 0-10.163z"></svg:path><svg:path fill="currentColor" d="M13.97 18.751c3.88 0 7.03-3.02 7.03-6.749s-3.15-6.75-7.03-6.75c-1.817 0-3.47.665-4.72 1.744c.861-.45 1.845-.618 2.892-.618c3.374 0 6.046 2.328 6.046 5.624s-2.666 6.232-6.046 6.232q-.574 0-1.114-.101c.894.393 1.89.618 2.942.618"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12.282 17.627a5.343 5.343 0 1 0 0-10.686a5.343 5.343 0 0 0 0 10.686m0-1.688a3.655 3.655 0 1 0 0-7.31a3.655 3.655 0 0 0 0 7.31" clip-rule="evenodd"></svg:path>`,
})
export class TokenX2y2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
