import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[feColumnsIcon],svg[fe-columns-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2m12 2v12h4V6zM4 6v12h4V6zm6 0v12h4V6z"></svg:path>`,
})
export class FeColumnsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
