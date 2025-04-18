import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTabGroup20FilledIcon],svg[fluent-tab-group-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.5 4A2.5 2.5 0 0 0 1 6.5v5A2.5 2.5 0 0 0 3.5 14h11a2.5 2.5 0 0 0 2.5-2.5v-5A2.5 2.5 0 0 0 14.5 4zM5 9a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 9m-1.496 6c.456.607 1.182 1 2 1h9a4.5 4.5 0 0 0 4.5-4.5v-3c0-.818-.393-1.544-1-2v5a3.5 3.5 0 0 1-3.5 3.5z"></svg:path>`,
})
export class FluentTabGroup20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
