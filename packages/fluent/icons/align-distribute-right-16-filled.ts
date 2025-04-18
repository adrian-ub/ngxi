import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentAlignDistributeRight16FilledIcon],svg[fluent-align-distribute-right-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 1.5a.5.5 0 0 0-1 0v13a.5.5 0 0 0 1 0zm-7 0a.5.5 0 0 0-1 0v13a.5.5 0 0 0 1 0zM3.5 13A1.5 1.5 0 0 1 2 11.5v-7A1.5 1.5 0 0 1 3.5 3h1A1.5 1.5 0 0 1 6 4.5v7A1.5 1.5 0 0 1 4.5 13zM9 9.5a1.5 1.5 0 0 0 1.5 1.5h1A1.5 1.5 0 0 0 13 9.5v-3A1.5 1.5 0 0 0 11.5 5h-1A1.5 1.5 0 0 0 9 6.5z"></svg:path>`,
})
export class FluentAlignDistributeRight16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
