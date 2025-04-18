import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhSquaredribbbleIcon],svg[whh-squaredribbble-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.428 1024h-768q-53 0-90.5-37.5T.428 896V128q0-53 37.5-90.5t90.5-37.5h768q53 0 90.5 37.5t37.5 90.5v768q0 53-37.5 90.5t-90.5 37.5m-75-429q-62-19-149-19q-25 0-56 9q20 109 24 220q66-29 113.5-84t67.5-126m-246 231q-3-101-24-212q-19 12-39 26q-53 38-83.5 77t-40.5 90q59 25 124 25q32 0 63-6m-383-314q0 79 36 147.5t98 112.5q38-116 134-184q38-27 76-44q-9-38-19-66q-75 35-155 34q-88-1-168-34q-2 18-2 34m16-100q78 36 144 36q62 0 138-34q-54-111-157-166q-91 61-125 164m304-220q-57 0-114 22q103 54 155 163q91-66 112-146q-71-39-153-39m205 74q-39 107-130 171q-1 1-9 6q12 34 24 78q42-9 84-9q72 1 144 25q2-23 2-25q0-73-30.5-137t-84.5-109"></svg:path>`,
})
export class WhhSquaredribbbleIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}
