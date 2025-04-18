import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiPyramidIcon],svg[mdi-pyramid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21.85 16.96l-9-14.49a1.003 1.003 0 0 0-1.7 0l-9 14.49c-.31.49-.15 1.22.49 1.47l9 3.5c.11.07.24.07.36.07s.25 0 .36-.07l9-3.5c.64-.25.8-.98.49-1.47M11 6.5v6.82L5.42 15.5zm1 13.43L5.76 17.5L12 15.07l6.24 2.43zm1-6.61V6.5l5.58 9z"></svg:path>`,
})
export class MdiPyramidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
