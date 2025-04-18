import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowRedo32LightIcon],svg[fluent-arrow-redo-32-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M25.995 3.5a.5.5 0 0 1 1 0v12a.5.5 0 0 1-.5.5h-12a.5.5 0 0 1 0-1h10.793l-9.07-9.07a6.571 6.571 0 1 0-9.293 9.292l12.924 12.925a.5.5 0 0 1-.707.707L6.218 15.93A7.571 7.571 0 0 1 16.925 5.222l9.07 9.07z"></svg:path>`,
})
export class FluentArrowRedo32LightIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
