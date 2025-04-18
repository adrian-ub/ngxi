import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesViewOnOutlineIcon],svg[bubbles-view-on-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M12 5.251C7.969 5.183 3.8 8 1.179 10.885a1.663 1.663 0 0 0 0 2.226C3.743 15.935 7.9 18.817 12 18.748c4.1.069 8.258-2.813 10.824-5.637a1.663 1.663 0 0 0 0-2.226C20.2 8 16.031 5.183 12 5.251"></svg:path><svg:path d="M15.75 12a3.75 3.75 0 1 1-7.499-.002A3.75 3.75 0 0 1 15.75 12"></svg:path></svg:g>`,
})
export class BubblesViewOnOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
