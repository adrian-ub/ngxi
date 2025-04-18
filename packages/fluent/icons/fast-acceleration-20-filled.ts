import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentFastAcceleration20FilledIcon],svg[fluent-fast-acceleration-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.904 7.197A3.5 3.5 0 0 1 11 6.5c.786 0 1.512.26 2.096.697l-1.08 1.08A2 2 0 0 0 11 8c-.37 0-.718.101-1.016.277zM13 10c0-.37-.101-.718-.277-1.016l1.08-1.08c.438.584.697 1.31.697 2.096s-.26 1.512-.697 2.096l-1.08-1.08A2 2 0 0 0 13 10m-2 2c.37 0 .718-.101 1.016-.277l1.08 1.08A3.5 3.5 0 0 1 11 13.5c-.786 0-1.512-.26-2.096-.697l1.08-1.08A2 2 0 0 0 11 12m-2-2c0 .37.101.718.277 1.016l-1.08 1.08A3.5 3.5 0 0 1 7.5 10c0-.786.26-1.512.697-2.096l1.08 1.08A2 2 0 0 0 9 10M6.101 5A6.98 6.98 0 0 0 4 10c0 1.074.242 2.09.674 3H3.5a.5.5 0 0 0 0 1h1.755q.377.54.846 1H1.5a.5.5 0 0 0 0 1h5.892a7 7 0 1 0 0-12H2.5a.5.5 0 0 0 0 1zM11 9a1 1 0 1 1 0 2a1 1 0 0 1 0-2"></svg:path>`,
})
export class FluentFastAcceleration20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
