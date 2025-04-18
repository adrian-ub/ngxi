import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiFolderClockIcon],svg[mdi-folder-clock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h7.26c1.31 1.88 3.45 3 5.74 3a7 7 0 0 0 7-7c0-1.83-.72-3.58-2-4.89V8a2 2 0 0 0-2-2h-8L9 4zm13 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m-1 1v5l3.61 2.16l.75-1.22l-2.86-1.69V12z"></svg:path>`,
})
export class MdiFolderClockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
