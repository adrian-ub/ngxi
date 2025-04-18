import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignRadio1Icon],svg[tdesign-radio-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.342 2.447L6.236 6H23v16h-1v-1v1H1V6.382L12.447.658zM21 20V8H3v12zM9 12a2 2 0 1 0 0 4a2 2 0 0 0 0-4m-4 2a4 4 0 1 1 8 0a4 4 0 0 1-8 0m10-3h4v2h-4zm0 4h4v2h-4z"></svg:path>`,
})
export class TdesignRadio1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
