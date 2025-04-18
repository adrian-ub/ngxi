import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceSearchSquareGlassSearchSquareMagnifyingIcon],svg[streamline-interface-search-square-glass-search-square-magnifying-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="6.5" cy="6.5" r="2.5"></svg:circle><svg:path d="M10 10L8.27 8.27"></svg:path><svg:rect width="13" height="13" x=".5" y=".5" rx="1"></svg:rect></svg:g>`,
})
export class StreamlineInterfaceSearchSquareGlassSearchSquareMagnifyingIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
