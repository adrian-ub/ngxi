import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignArchway1FilledIcon],svg[tdesign-archway-1-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h20v5h-2.915l.385 3H22v2h-2.274l1.393 10.865l-1.984.254L17.71 12H6.258l-1.39 11.116l-1.984-.248L4.242 12H2v-2h2.492l.375-3H2zm4.883 5l-.375 3H11V7zM13 7v3h4.454l-.385-3z"></svg:path>`,
})
export class TdesignArchway1FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
