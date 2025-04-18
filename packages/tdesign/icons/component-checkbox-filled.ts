import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignComponentCheckboxFilledIcon],svg[tdesign-component-checkbox-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 2H2v13h5.5v-2H4V4h9v3.5h2z"></svg:path><svg:path fill="currentColor" d="M22 9H9v13h13zm-8.5 5.086l1.5 1.5l3-3L19.414 14L15 18.414L12.086 15.5z"></svg:path>`,
})
export class TdesignComponentCheckboxFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
