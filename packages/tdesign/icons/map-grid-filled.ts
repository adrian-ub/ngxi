import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignMapGridFilledIcon],svg[tdesign-map-grid-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 11V9h2v2zm4 0V9h2v2zm0 2h2v2h-2zm-2 0v2H9v-2z"></svg:path><svg:path fill="currentColor" d="M22 2H2v20h20zM9 7h2V6h2v1h2V6h2v1h1v2h-1v2h1v2h-1v2h1v2h-1v1h-2v-1h-2v1h-2v-1H9v1H7v-1H6v-2h1v-2H6v-2h1V9H6V7h1V6h2z"></svg:path>`,
})
export class TdesignMapGridFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
