import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignComponentCheckboxIcon],svg[tdesign-component-checkbox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h13v5.5h-2V4H4v9h3.5v2H2zm7 7h13v13H9zm2 2v9h9v-9zm8.414 3L15 18.414L12.086 15.5l1.414-1.414l1.5 1.5l3-3z"></svg:path>`,
})
export class TdesignComponentCheckboxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
