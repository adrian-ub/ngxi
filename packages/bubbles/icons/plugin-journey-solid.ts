import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesPluginJourneySolidIcon],svg[bubbles-plugin-journey-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path fill="currentColor" d="M9.844 19.248H22.78v4.5H9.844zm0-7.5H22.78v4.5H9.844z"></svg:path><svg:path d="M1.219 1.248h12.937v4.5H1.22zm5.75 4.5v1.5c0 .398.151.78.42 1.06c.27.282.636.44 1.017.44h4.313c.381 0 .747.158 1.016.44c.27.28.421.662.421 1.06v1.5m2.875 4.5v3"></svg:path></svg:g>`,
})
export class BubblesPluginJourneySolidIcon {
  readonly viewBox = input("0 0 24 25")
  readonly width = input("0.96em")
  readonly height = input("1em")
}
