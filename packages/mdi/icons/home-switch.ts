import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiHomeSwitchIcon],svg[mdi-home-switch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.5 15v-4h3v4H13V9h2L8 3L1 9h2v6zM9 16v2h6v-2l3 3l-3 3v-2H9v2l-3-3zm14-7h-2v6h-6v-5h4l-5.46-4.89L16 3z"></svg:path>`,
})
export class MdiHomeSwitchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
