import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiPathSolidIcon],svg[mynaui-path-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 9.75a3.74 3.74 0 0 1-2.068-.621l-6.803 6.803a3.75 3.75 0 1 1-1.06-1.06l6.802-6.804A3.75 3.75 0 1 1 18 9.75"></svg:path>`,
})
export class MynauiPathSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
