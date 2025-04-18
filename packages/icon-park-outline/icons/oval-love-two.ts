import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineOvalLoveTwoIcon],svg[icon-park-outline-oval-love-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M23.784 10.372c-5.11-4.56-11.14-6.225-15.526-3.692C2.04 10.27 1.477 20.934 7 30.5c3.63 6.29 8.989 10.538 14 11.69"></svg:path><svg:path d="M18.258 17.5c-5.523 9.566-4.96 20.23 1.258 23.82s15.736-1.254 21.259-10.82s4.96-20.23-1.259-23.82C33.3 3.09 23.781 7.934 18.258 17.5"></svg:path></svg:g>`,
})
export class IconParkOutlineOvalLoveTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
