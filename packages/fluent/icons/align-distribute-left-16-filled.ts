import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentAlignDistributeLeft16FilledIcon],svg[fluent-align-distribute-left-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 14.5a.5.5 0 0 0 1 0v-13a.5.5 0 0 0-1 0zm7 0a.5.5 0 0 0 1 0v-13a.5.5 0 0 0-1 0zM4.5 13A1.5 1.5 0 0 1 3 11.5v-7A1.5 1.5 0 0 1 4.5 3h1A1.5 1.5 0 0 1 7 4.5v7A1.5 1.5 0 0 1 5.5 13zM10 9.5a1.5 1.5 0 0 0 1.5 1.5h1A1.5 1.5 0 0 0 14 9.5v-3A1.5 1.5 0 0 0 12.5 5h-1A1.5 1.5 0 0 0 10 6.5z"></svg:path>`,
})
export class FluentAlignDistributeLeft16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
