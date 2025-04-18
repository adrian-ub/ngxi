import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[grommetIconsTurbolinuxIcon],svg[grommet-icons-turbolinux-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m9.419 6.222l.547 1.23h-3.35L6 6.223zm3.692 5.949L7.094 0l7.042 4.17l.41 1.984h3.351l-.752 2.051h-2.188l1.778 8.274l-4.171-2.052L14.684 24L8.187 10.803z"></svg:path>`,
})
export class GrommetIconsTurbolinuxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
