import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCity20RegularIcon],svg[fluent-city-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 2a.5.5 0 0 1 .5.5V4h1A1.5 1.5 0 0 1 13 5.5V9h2.5a1.5 1.5 0 0 1 1.5 1.5v6a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 3 16.5v-6.184a1.5 1.5 0 0 1 .728-1.286l3-1.8A1.5 1.5 0 0 1 7 7.1V5.5A1.5 1.5 0 0 1 8.5 4h1V2.5A.5.5 0 0 1 10 2M8 7.102c.563.2 1 .73 1 1.414V17h2v-6.5a1.5 1.5 0 0 1 1-1.415V5.501a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5zM12.5 10a.5.5 0 0 0-.5.5V17h3.5a.5.5 0 0 0 .5-.5v-6a.5.5 0 0 0-.5-.5zM7.243 8.087l-3 1.8a.5.5 0 0 0-.243.43V16.5a.5.5 0 0 0 .5.5H8V8.516a.5.5 0 0 0-.757-.429"></svg:path>`,
})
export class FluentCity20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
