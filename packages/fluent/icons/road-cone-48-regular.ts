import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentRoadCone48RegularIcon],svg[fluent-road-cone-48-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.368 4a2.5 2.5 0 0 0-2.415 1.856L10.58 41H5.5a1.5 1.5 0 0 0 0 3h37a1.5 1.5 0 1 0 0-3h-5.08L28.046 5.856A2.5 2.5 0 0 0 25.632 4zm-8.682 37l1.866-7H27.5a1.5 1.5 0 0 0 0-3H16.352l1.067-4H25.5a1.5 1.5 0 0 0 0-3h-7.28l4.532-17h2.496l9.066 34z"></svg:path>`,
})
export class FluentRoadCone48RegularIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
