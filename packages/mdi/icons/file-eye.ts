import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiFileEyeIcon],svg[mdi-file-eye-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 18c.56 0 1 .44 1 1s-.44 1-1 1s-1-.44-1-1s.44-1 1-1m0-3c-2.73 0-5.06 1.66-6 4c.94 2.34 3.27 4 6 4s5.06-1.66 6-4c-.94-2.34-3.27-4-6-4m0 6.5a2.5 2.5 0 0 1-2.5-2.5a2.5 2.5 0 0 1 2.5-2.5a2.5 2.5 0 0 1 2.5 2.5a2.5 2.5 0 0 1-2.5 2.5m-7.86-1.75L8.85 19l.29-.74C10.43 15.06 13.5 13 17 13c1.05 0 2.06.21 3 .56V8l-6-6H6c-1.11 0-2 .89-2 2v16a2 2 0 0 0 2 2h4.5c-.55-.66-1-1.42-1.36-2.25M13 3.5L18.5 9H13z"></svg:path>`,
})
export class MdiFileEyeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
