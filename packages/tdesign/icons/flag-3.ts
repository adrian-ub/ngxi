import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignFlag3Icon],svg[tdesign-flag-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 10L8 18.66V1.34zM10 4.804v10.392L19 10zM4 1h2v22H4z"></svg:path>`,
})
export class TdesignFlag3Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
