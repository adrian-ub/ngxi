import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerSockIcon],svg[tabler-sock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M13 3v6l4.798 5.142a4 4 0 0 1-5.441 5.86l-6.736-6.41A2 2 0 0 1 5 12.141V3z"></svg:path><svg:path d="M7.895 15.768C8.603 15.047 9 14.091 9 13a4 4 0 0 0-4-4"></svg:path></svg:g>`,
})
export class TablerSockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
