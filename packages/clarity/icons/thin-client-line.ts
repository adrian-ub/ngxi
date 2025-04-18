import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityThinClientLineIcon],svg[clarity-thin-client-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 30H5a1 1 0 0 1-1-1V4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v25a1 1 0 0 1-1 1m-7-2h6V4H6Z"></svg:path><svg:circle cx="9" cy="7.42" r="1.5" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M15 34H3a1 1 0 0 1 0-2h12a1 1 0 0 1 0 2M7.55 12.2h3v1.6h-3zm0 3h3v1.6h-3zm0 3h3v1.6h-3zM16 8h2v1.6h-2zm4 0h2v1.6h-2zm13 3.8h-8a.8.8 0 0 1-.8-.8V5a.8.8 0 0 1 .8-.8h8a.8.8 0 0 1 .8.8v6a.8.8 0 0 1-.8.8m-7.2-1.6h6.4V5.8h-6.4ZM16 20h2v1.6h-2zm4 0h2v1.6h-2zm13 3.8h-8a.8.8 0 0 1-.8-.8v-6a.8.8 0 0 1 .8-.8h8a.8.8 0 0 1 .8.8v6a.8.8 0 0 1-.8.8m-7.2-1.6h6.4v-4.4h-6.4Z"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityThinClientLineIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
