import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fileIconsCmakeIcon],svg[file-icons-cmake-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M272.728 22.068L512 497.945L306.578 413.79zm-266.892 446l256.677-218.594L240.924 0zm146.217-85.645L0 512h467.856z"></svg:path>`,
})
export class FileIconsCmakeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
