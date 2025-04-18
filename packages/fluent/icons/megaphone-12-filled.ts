import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMegaphone12FilledIcon],svg[fluent-megaphone-12-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.963 1.104A1.5 1.5 0 0 1 11 2.504v5.998A1.5 1.5 0 0 1 9.044 9.93l-2.062-.658A2 2 0 0 1 3 9v-.997l-.956-.305A1.5 1.5 0 0 1 1 6.27V5.188a1.5 1.5 0 0 1 .963-1.401zM4 8.322V9a1 1 0 0 0 2 0v-.04z"></svg:path>`,
})
export class FluentMegaphone12FilledIcon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
