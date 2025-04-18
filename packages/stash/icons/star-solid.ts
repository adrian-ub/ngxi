import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[stashStarSolidIcon],svg[stash-star-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.846 3.822c.427-1.027 1.88-1.027 2.308 0l1.743 4.19l4.524.363c1.108.089 1.558 1.472.713 2.195l-3.447 2.953l1.053 4.415c.258 1.081-.918 1.936-1.867 1.357L12 16.929l-3.873 2.366c-.95.58-2.126-.276-1.868-1.357l1.053-4.415l-3.447-2.953c-.844-.723-.395-2.106.714-2.195l4.524-.363z"></svg:path>`,
})
export class StashStarSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
