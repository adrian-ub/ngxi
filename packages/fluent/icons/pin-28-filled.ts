import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPin28FilledIcon],svg[fluent-pin-28-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.039 3.478c-1.59-1.59-4.274-1.124-5.236.907l-2.553 5.39a1.75 1.75 0 0 1-.953.884l-4.13 1.588a1.75 1.75 0 0 0-.61 2.871L8.69 18.25L3 23.94V25h1.06l5.69-5.69l3.132 3.132a1.75 1.75 0 0 0 2.87-.61l1.589-4.13c.161-.419.478-.76.884-.953l5.39-2.553c2.031-.962 2.496-3.646.907-5.235z"></svg:path>`,
})
export class FluentPin28FilledIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
