import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiFolderClockOutlineIcon],svg[mdi-folder-clock-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 12h1.5v4.25l2.86 1.69l-.75 1.22L15 17zm4-4H3v10h6.29C9.1 17.37 9 16.7 9 16a7 7 0 0 1 7-7c1.07 0 2.09.24 3 .67zM3 20a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h6l2 2h8a2 2 0 0 1 2 2v3.1c1.24 1.26 2 2.99 2 4.9a7 7 0 0 1-7 7c-2.38 0-4.5-1.19-5.75-3zm13-9a5 5 0 0 0-5 5a5 5 0 0 0 5 5a5 5 0 0 0 5-5a5 5 0 0 0-5-5"></svg:path>`,
})
export class MdiFolderClockOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
