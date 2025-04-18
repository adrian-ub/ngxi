import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixHeadingIcon],svg[ix-heading-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M106.667 448V64h48.496v169.101h201.674V64h48.496v384h-48.496V269.685H155.163V448z"></svg:path>`,
})
export class IxHeadingIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
