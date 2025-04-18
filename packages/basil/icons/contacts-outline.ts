import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[basilContactsOutlineIcon],svg[basil-contacts-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 9a2 2 0 1 1 4 0a2 2 0 0 1-4 0m1 3.5a3 3 0 0 0-3 3a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1a3 3 0 0 0-3-3z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M7.543 2.883a31.3 31.3 0 0 1 8.913 0a3.196 3.196 0 0 1 2.73 2.874l.126 1.396c.293 3.225.293 6.47 0 9.694l-.127 1.396a3.2 3.2 0 0 1-2.729 2.874a31.3 31.3 0 0 1-8.913 0a3.2 3.2 0 0 1-2.728-2.874l-.127-1.396a53.5 53.5 0 0 1 0-9.694l.127-1.396a3.2 3.2 0 0 1 2.728-2.874m8.7 1.484a29.8 29.8 0 0 0-8.486 0a1.7 1.7 0 0 0-1.448 1.526l-.127 1.396a52 52 0 0 0 0 9.422l.127 1.396c.07.783.67 1.414 1.448 1.526a29.9 29.9 0 0 0 8.486 0a1.696 1.696 0 0 0 1.448-1.526l.127-1.396a52 52 0 0 0 0-9.422l-.127-1.396a1.7 1.7 0 0 0-1.448-1.526" clip-rule="evenodd"></svg:path>`,
})
export class BasilContactsOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
