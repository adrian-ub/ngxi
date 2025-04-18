import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignEdit1FilledIcon],svg[tdesign-edit-1-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m22.583 7.17l-5.755-5.754l-4.34 4.34l5.754 5.756zm-5.755 5.756L11.073 7.17L2 16.245V22h5.755z"></svg:path>`,
})
export class TdesignEdit1FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
