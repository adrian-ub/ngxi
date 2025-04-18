import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiHomeSwitchOutlineIcon],svg[mdi-home-switch-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 3L1 9h2v6h4v-4h2v4h4V9h2zm3.5 6v4.5h-1v-4h-5v4h-1V8L8 5l3.5 3zM9 16v2h6v-2l3 3l-3 3v-2H9v2l-3-3zm14-7h-2v6h-6v-5h4l-5.46-4.89L16 3z"></svg:path>`,
})
export class MdiHomeSwitchOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
