import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiControllerClassicIcon],svg[mdi-controller-classic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 7h12a5 5 0 0 1 5 5a5 5 0 0 1-5 5c-1.64 0-3.09-.79-4-2h-4c-.91 1.21-2.36 2-4 2a5 5 0 0 1-5-5a5 5 0 0 1 5-5m13.75 2.5a1.25 1.25 0 0 0-1.25 1.25A1.25 1.25 0 0 0 19.75 12A1.25 1.25 0 0 0 21 10.75a1.25 1.25 0 0 0-1.25-1.25m-2.5 2.5A1.25 1.25 0 0 0 16 13.25a1.25 1.25 0 0 0 1.25 1.25a1.25 1.25 0 0 0 1.25-1.25A1.25 1.25 0 0 0 17.25 12M5 9v2H3v2h2v2h2v-2h2v-2H7V9z"></svg:path>`,
})
export class MdiControllerClassicIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
