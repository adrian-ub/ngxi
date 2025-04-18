import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonGroupPresentationIcon],svg[carbon-group-presentation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 30H8v-3H4v3H2v-3a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2zm20 0h-2v-3h-4v3h-2v-3a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2zm-10 0h-2v-3h-4v3h-2v-3a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2z"></svg:path><svg:circle cx="16" cy="22" r="2" fill="currentColor"></svg:circle><svg:circle cx="6" cy="22" r="2" fill="currentColor"></svg:circle><svg:circle cx="26" cy="22" r="2" fill="currentColor"></svg:circle><svg:circle cx="21" cy="18" r="2" fill="currentColor"></svg:circle><svg:circle cx="11" cy="18" r="2" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M26 14H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2M6 4v8h20V4Z"></svg:path>`,
})
export class CarbonGroupPresentationIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
