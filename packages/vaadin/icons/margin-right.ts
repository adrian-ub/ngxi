import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinMarginRightIcon],svg[vaadin-margin-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 2V1h-1V0H0v16h14v-1h-1v-1h1v-1h-1v-1h1v-1h-1v-1h1V9h-1V8h1V7h-1V6h1V5h-1V4h1V3h-1V2zm-2 13H1V1h11zm3 0h1v1h-1zm-1-1h1v1h-1zm1-1h1v1h-1zm-1-1h1v1h-1zm1-1h1v1h-1zm-1-1h1v1h-1zm1-1h1v1h-1zm-1-1h1v1h-1zm1-1h1v1h-1zm-1-1h1v1h-1zm1-1h1v1h-1zm-1-1h1v1h-1zm1-1h1v1h-1zm-1-1h1v1h-1zm1-1h1v1h-1zm-1-1h1v1h-1z"></svg:path>`,
})
export class VaadinMarginRightIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
