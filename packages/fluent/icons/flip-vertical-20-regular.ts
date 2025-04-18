import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentFlipVertical20RegularIcon],svg[fluent-flip-vertical-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.77 2.079A.5.5 0 0 1 16 2.5v6a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.21-.954l13-6a.5.5 0 0 1 .48.033M4.777 8H15V3.281zM16 17.5a.5.5 0 0 1-.71.454l-13-6A.5.5 0 0 1 2.5 11h13a.5.5 0 0 1 .5.5z"></svg:path>`,
})
export class FluentFlipVertical20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
