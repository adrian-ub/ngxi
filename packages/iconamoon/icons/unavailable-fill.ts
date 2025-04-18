import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonUnavailableFillIcon],svg[iconamoon-unavailable-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.503 5.382a8 8 0 0 1 11.114 11.114zm-2.12 2.121a8 8 0 0 0 11.114 11.114zM12 2a9.97 9.97 0 0 0-7.071 2.929A9.97 9.97 0 0 0 2 12c0 5.523 4.477 10 10 10a9.97 9.97 0 0 0 7.071-2.929A9.97 9.97 0 0 0 22 12c0-5.523-4.477-10-10-10" clip-rule="evenodd"></svg:path>`,
})
export class IconamoonUnavailableFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
