import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDataTrending20RegularIcon],svg[fluent-data-trending-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.5 2a.5.5 0 0 1 .5.5v13A1.5 1.5 0 0 0 4.5 17h13a.5.5 0 0 1 0 1h-13A2.5 2.5 0 0 1 2 15.5v-13a.5.5 0 0 1 .5-.5M12 5.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V6.707l-4.646 4.647a.5.5 0 0 1-.708 0L9 9.707l-3.146 3.147a.5.5 0 0 1-.708-.708l3.5-3.5a.5.5 0 0 1 .708 0L11 10.293L15.293 6H12.5a.5.5 0 0 1-.5-.5"></svg:path>`,
})
export class FluentDataTrending20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
