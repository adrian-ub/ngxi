import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gridiconsScheduledIcon],svg[gridicons-scheduled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10.498 18.001l-3.705-3.705l1.415-1.415l2.294 2.294l5.293-5.293l1.415 1.415zM21 6v13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1V2h2v2h8V2h2v2h1a2 2 0 0 1 2 2m-2 2H5v11h14z"></svg:path>`,
})
export class GridiconsScheduledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
