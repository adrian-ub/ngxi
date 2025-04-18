import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiLightBorderTopIcon],svg[mdi-light-border-top-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 5h-8v1h-1V5H3V4h17zM3 7h1v2H3zm16 4h1v3h-1v-1h-1v-1h1zm0-4h1v2h-1zm-8 5h1v1h-1zm9 8v1h-1v-1zm0-2h-1v-2h1zM8 20v1H6v-1zm9 0v1h-2v-1zm-4 0v1h-3v-1h1v-1h1v1zm-9-9v1h1v1H4v1H3v-3zm-1 5h1v2H3zm1 4v1H3v-1zm5-8v1H7v-1zm2-4h1v2h-1zm0 7h1v2h-1zm5-3v1h-2v-1z"></svg:path>`,
})
export class MdiLightBorderTopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
