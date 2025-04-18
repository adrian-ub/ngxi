import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsKeyDuotoneIcon],svg[lets-icons-key-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-opacity=".25" d="M18.896 10H8v4h6.732a.5.5 0 0 0 .416-.223l.436-.653a.5.5 0 0 1 .832 0l.376.564a.25.25 0 0 0 .416 0l.376-.564a.5.5 0 0 1 .832 0l.415.622a.25.25 0 0 0 .385.038l1.607-1.607a.25.25 0 0 0 0-.354l-1.75-1.75a.25.25 0 0 0-.177-.073"></svg:path><svg:rect width="6" height="1" x="10" y="11" fill="currentColor" rx=".5"></svg:rect><svg:path fill="currentColor" fill-rule="evenodd" d="M3.586 8.586C3 9.172 3 10.114 3 12s0 2.828.586 3.414S5.114 16 7 16s2.828 0 3.414-.586S11 13.886 11 12s0-2.828-.586-3.414S8.886 8 7 8s-2.828 0-3.414.586M6 10a1 1 0 1 0 0 2a1 1 0 0 0 0-2" clip-rule="evenodd"></svg:path>`,
})
export class LetsIconsKeyDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
