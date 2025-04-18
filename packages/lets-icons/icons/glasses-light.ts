import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsGlassesLightIcon],svg[lets-icons-glasses-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round"><svg:path d="M3.5 13.5v2a4 4 0 0 0 4 4v0a3 3 0 0 0 3-3V14a1.5 1.5 0 0 1 1.5-1.5v0a1.5 1.5 0 0 1 1.5 1.5v2.5a3 3 0 0 0 3 3v0a4 4 0 0 0 4-4v-2"></svg:path><svg:path stroke-linejoin="round" d="M10.5 13.5h-7l2.856-8.568a1.1 1.1 0 0 1 .552-.636v0A1.1 1.1 0 0 1 8.5 5.28v.22m5 8h7l-2.856-8.568a1.1 1.1 0 0 0-.552-.636v0a1.1 1.1 0 0 0-1.592.984v.22"></svg:path></svg:g>`,
})
export class LetsIconsGlassesLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
