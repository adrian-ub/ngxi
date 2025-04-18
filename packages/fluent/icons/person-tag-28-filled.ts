import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPersonTag28FilledIcon],svg[fluent-person-tag-28-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.222 25.14c-1.493.546-3.268.854-5.222.854c-5.79 0-10-2.566-10-6.283v-.715a3 3 0 0 1 3-3h8l.001 3.683c0 .795.317 1.557.879 2.12zm-2.132-12c-.3.096-.58.237-.831.417A6 6 0 1 1 18 7.999a6 6 0 0 1-2.91 5.142M14 16.001l.001 3.677a2 2 0 0 0 .586 1.414l5.324 5.322a2 2 0 0 0 2.828 0l3.677-3.676a2 2 0 0 0 0-2.828l-5.323-5.322a2 2 0 0 0-1.414-.586L16 14.001A2 2 0 0 0 14 16m3 1.995a1 1 0 1 1 0-2a1 1 0 0 1 0 2"></svg:path>`,
})
export class FluentPersonTag28FilledIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
