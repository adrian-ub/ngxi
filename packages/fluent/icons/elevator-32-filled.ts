import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentElevator32FilledIcon],svg[fluent-elevator-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 28h8.5a4.5 4.5 0 0 0 4.5-4.5v-15A4.5 4.5 0 0 0 25.5 4H17zm7.5-16v6.086l1.293-1.293a1 1 0 0 1 1.414 1.414l-3 3a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 1.414-1.414l1.293 1.293V12a1 1 0 1 1 2 0M15 4H6.5A4.5 4.5 0 0 0 2 8.5v15A4.5 4.5 0 0 0 6.5 28H15zM8.5 21.5a1 1 0 0 1-1-1v-6.086l-1.293 1.293a1 1 0 0 1-1.414-1.414l3-3a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1-1.414 1.414L9.5 14.414V20.5a1 1 0 0 1-1 1"></svg:path>`,
})
export class FluentElevator32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
