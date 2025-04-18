import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignCombinationFilledIcon],svg[tdesign-combination-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 1.148l6.16 9.602H5.84zM2 13h9v9H2zm11 4.5a4.5 4.5 0 1 1 9 0a4.5 4.5 0 0 1-9 0"></svg:path>`,
})
export class TdesignCombinationFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
