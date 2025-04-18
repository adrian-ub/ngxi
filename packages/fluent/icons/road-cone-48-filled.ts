import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentRoadCone48FilledIcon],svg[fluent-road-cone-48-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.388 4a2.5 2.5 0 0 0-2.43 1.91c-1.382 5.684-3.07 11.898-4.77 18.09H25.5a1.5 1.5 0 1 1 0 3H14.362l-1.099 4H27.5a1.5 1.5 0 0 1 0 3H12.445a654 654 0 0 0-1.865 7H5.5a1.5 1.5 0 0 0 0 3h37a1.5 1.5 0 1 0 0-3h-5.08L28.046 5.856A2.5 2.5 0 0 0 25.632 4z"></svg:path>`,
})
export class FluentRoadCone48FilledIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
