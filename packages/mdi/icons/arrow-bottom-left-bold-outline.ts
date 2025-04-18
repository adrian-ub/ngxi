import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiArrowBottomLeftBoldOutlineIcon],svg[mdi-arrow-bottom-left-bold-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.36 19.78H4.22V5.64l4.25 4.24l5.65-5.66l5.66 5.66l-5.66 5.66zM6.34 17.66h7.07l-2.12-2.12l5.66-5.66l-2.83-2.83l-5.66 5.66l-2.12-2.12z"></svg:path>`,
})
export class MdiArrowBottomLeftBoldOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
