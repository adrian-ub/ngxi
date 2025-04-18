import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiApertureIcon],svg[mynaui-aperture-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m14.079 8.4l5.166 8.946M9.921 8.4h10.332M7.842 12l5.166-8.946M9.921 15.6L4.755 6.654M14.08 15.6H3.746M16.158 12l-5.166 8.946M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0"></svg:path>`,
})
export class MynauiApertureIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
