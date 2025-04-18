import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiSwapVerticalCircleIcon],svg[mdi-swap-vertical-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2M6.5 9L10 5.5L13.5 9H11v4H9V9zm11 6L14 18.5L10.5 15H13v-4h2v4z"></svg:path>`,
})
export class MdiSwapVerticalCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
