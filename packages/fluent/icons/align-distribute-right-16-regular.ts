import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentAlignDistributeRight16RegularIcon],svg[fluent-align-distribute-right-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 1.5a.5.5 0 0 0-1 0v13a.5.5 0 0 0 1 0zm-7 0a.5.5 0 0 0-1 0v13a.5.5 0 0 0 1 0zM3.5 13A1.5 1.5 0 0 1 2 11.5v-7A1.5 1.5 0 0 1 3.5 3h1A1.5 1.5 0 0 1 6 4.5v7A1.5 1.5 0 0 1 4.5 13zM3 11.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5zm6-2a1.5 1.5 0 0 0 1.5 1.5h1A1.5 1.5 0 0 0 13 9.5v-3A1.5 1.5 0 0 0 11.5 5h-1A1.5 1.5 0 0 0 9 6.5zm1.5.5a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5z"></svg:path>`,
})
export class FluentAlignDistributeRight16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
