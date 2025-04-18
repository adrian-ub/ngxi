import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentHighway20FilledIcon],svg[fluent-highway-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.993 2.853a.75.75 0 0 0-1.486-.205l-2 14.5a.75.75 0 1 0 1.486.204zm9.5-.205a.75.75 0 0 0-1.486.205l2 14.5a.75.75 0 0 0 1.486-.205zm-4.743.102a.75.75 0 0 0-1.5 0v2.5a.75.75 0 0 0 1.5 0zm-1.5 8.5a.75.75 0 0 0 1.5 0v-2.5a.75.75 0 0 0-1.5 0zm0 3.5a.75.75 0 0 1 1.5 0v2.5a.75.75 0 0 1-1.5 0z"></svg:path>`,
})
export class FluentHighway20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
