import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiLightBorderLeftIcon],svg[mdi-light-border-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 4v8h1v1H4v8H3V4zm2 17v-1h2v1zm4-16V4h3v1h-1v1h-1V5zM6 5V4h2v1zm5 8v-1h1v1zm8-9h1v1h-1zm-2 0v1h-2V4zm2 12h1v2h-1zm0-9h1v2h-1zm0 4h1v3h-1v-1h-1v-1h1zm-9 9h1v-1h1v1h1v1h-3zm5 1v-1h2v1zm4-1h1v1h-1zm-8-5h1v2h-1zm-4-2v-1h2v1zm7 0v-1h2v1zm-3-5h1v2h-1z"></svg:path>`,
})
export class MdiLightBorderLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
