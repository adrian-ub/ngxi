import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceSearchGlassSearchMagnifyingIcon],svg[streamline-interface-search-glass-search-magnifying-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="5.92" cy="5.92" r="5.42"></svg:circle><svg:path d="M13.5 13.5L9.75 9.75"></svg:path></svg:g>`,
})
export class StreamlineInterfaceSearchGlassSearchMagnifyingIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
