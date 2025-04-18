import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiLightBorderInsideIcon],svg[mdi-light-border-inside-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 4v1h-2V4zm-4 16v1h-3v-1h1v-7H4v1H3v-3h1v1h7V5h-1V4h3v1h-1v7h7v-1h1v3h-1v-1h-7v7zm4 0v1h-2v-1zM4 21H3v-1h1zm2 0v-1h2v1zM4 9H3V7h1zm0 9H3v-2h1zM8 4v1H6V4zM4 5H3V4h1zm15 16v-1h1v1zm0-12V7h1v2zm0 9v-2h1v2zm0-13V4h1v1z"></svg:path>`,
})
export class MdiLightBorderInsideIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
