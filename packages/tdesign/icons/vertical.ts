import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignVerticalIcon],svg[tdesign-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h16v6H2zm2 2v2h12V4zm-2 6h16v12H2zm2 2v8h12v-8zM22 2v20h-2V2z"></svg:path>`,
})
export class TdesignVerticalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
