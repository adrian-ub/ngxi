import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignRadio2Icon],svg[tdesign-radio-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 3h22v16h-4v3h-2v-3H7v3H5v-3H1zm2 2v12h18V5zm12 4a2 2 0 1 0 0 4a2 2 0 0 0 0-4m-4 2a4 4 0 1 1 8 0a4 4 0 0 1-8 0M5 8h4v2H5zm0 4h4v2H5z"></svg:path>`,
})
export class TdesignRadio2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
