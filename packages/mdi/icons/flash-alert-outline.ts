import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiFlashAlertOutlineIcon],svg[mdi-flash-alert-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 2h10l-3.5 7H15L8 22v-8H5zm2 2v8h3v2.66L12 11H8.24l3.52-7M17 15h2v2h-2zm0-8h2v6h-2z"></svg:path>`,
})
export class MdiFlashAlertOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
