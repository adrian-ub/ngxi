import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[rivetIconsPageTopIcon],svg[rivet-icons-page-top-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 3h14V1H1zm6 5.174V15h2V8.174l2.608 2.236l1.302-1.518L8 4.682l-4.91 4.21l1.302 1.518z"></svg:path>`,
})
export class RivetIconsPageTopIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
