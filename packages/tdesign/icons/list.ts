import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignListIcon],svg[tdesign-list-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 19.004h2.004V17H2zM7 19h15v-2H7zm-5-5.996h2.004V11H2zM7 13h15v-2H7zM2 7.004h2.004V5H2zM7 7h15V5H7z"></svg:path>`,
})
export class TdesignListIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
