import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[rivetIconsPageBottomIcon],svg[rivet-icons-page-bottom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 3h14V1H1zm8 8.826V5H7v6.826L4.392 9.59L3.09 11.108L8 15.319l4.91-4.21l-1.302-1.518z"></svg:path>`,
})
export class RivetIconsPageBottomIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
