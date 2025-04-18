import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonAppsLightIcon],svg[iconamoon-apps-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 4h2v2H4zm0 14h2v2H4zM18 4h2v2h-2zm0 7h2v2h-2zm-7 0h2v2h-2zm-7 0h2v2H4zm7-7h2v2h-2zm0 14h2v2h-2zm7 0h2v2h-2z"></svg:path>`,
})
export class IconamoonAppsLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
