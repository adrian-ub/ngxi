import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riNpmjsLineIcon],svg[ri-npmjs-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.001 3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-16a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm-1 2h-14v14h14zm-2 2v10h-2.5V9.5h-2.5V17h-5V7z"></svg:path>`,
})
export class RiNpmjsLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
