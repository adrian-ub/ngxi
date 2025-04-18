import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiEarIcon],svg[mynaui-ear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M7.555 16.46c0 1.68.86 3.04 2.415 3.04s2.819-1.14 3.221-3.04c.733-3.451 5.496-4.293 3.628-8.878C14.799 2.622 6.75 3.899 6.75 9.618"></svg:path><svg:path d="M9.5 14c.46 0 .921-.29 1.295-.618c.572-.5.613-1.351.194-1.985c-.407-.619-1.336-1.173-1.156-2.018c.595-2.793 4.222-2.41 4.463.383"></svg:path></svg:g>`,
})
export class MynauiEarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
