import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowForwardDownPerson24RegularIcon],svg[fluent-arrow-forward-down-person-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.69 9.5l-2.963-2.962a.75.75 0 0 1 .977-1.134l.084.073L22.03 9.72a.75.75 0 0 1 .073.976l-.073.084l-4.242 4.243a.75.75 0 0 1-1.134-.977l.073-.084l2.963-2.961L14 11a7.75 7.75 0 0 1-7.746-7.504L6.25 3.25a.75.75 0 0 1 1.5 0a6.25 6.25 0 0 0 6.02 6.246L14 9.5zM9 13.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0m2 5.375C11 20.432 9.714 22 6.5 22S2 20.438 2 18.875v-.103C2 17.793 2.794 17 3.773 17h5.454c.98 0 1.773.793 1.773 1.772z"></svg:path>`,
})
export class FluentArrowForwardDownPerson24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
