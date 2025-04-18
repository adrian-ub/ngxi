import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riTvFillIcon],svg[ri-tv-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.414 5h5.594c.548 0 .992.445.992 1v14c0 .552-.455 1-.992 1H2.992A.994.994 0 0 1 2 20V6c0-.552.455-1 .992-1h5.594L6.05 2.464L7.464 1.05L11.414 5h1.172l3.95-3.95l1.414 1.414z"></svg:path>`,
})
export class RiTvFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
