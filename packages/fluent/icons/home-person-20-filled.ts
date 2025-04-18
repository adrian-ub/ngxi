import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentHomePerson20FilledIcon],svg[fluent-home-person-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.998 2.388a1.5 1.5 0 0 1 2.005 0l5.5 4.942A1.5 1.5 0 0 1 17 8.445v.956A3 3 0 0 0 12.67 11H8.5a.5.5 0 0 0-.5.5v4A1.5 1.5 0 0 1 6.5 17h-2A1.5 1.5 0 0 1 3 15.5V8.445c0-.425.18-.83.498-1.115zM17.5 12a2 2 0 1 1-4 0a2 2 0 0 1 4 0m1.5 4.5c0 1.245-1 2.5-3.5 2.5S12 17.75 12 16.5a1.5 1.5 0 0 1 1.5-1.5h4a1.5 1.5 0 0 1 1.5 1.5"></svg:path>`,
})
export class FluentHomePerson20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
