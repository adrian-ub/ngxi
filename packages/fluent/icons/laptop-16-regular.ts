import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentLaptop16RegularIcon],svg[fluent-laptop-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.5 4A1.5 1.5 0 0 0 3 5.5v4A1.5 1.5 0 0 0 4.5 11h7A1.5 1.5 0 0 0 13 9.5v-4A1.5 1.5 0 0 0 11.5 4zM4 5.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5zM2.5 12a.5.5 0 0 0 0 1h11a.5.5 0 0 0 0-1z"></svg:path>`,
})
export class FluentLaptop16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
