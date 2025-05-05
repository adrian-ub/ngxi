import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixTagConnectionViewIcon],svg[ix-tag-connection-view-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M42.667 64h42.666v64a42.66 42.66 0 0 1 36.951 21.333H192a21.33 21.33 0 0 1 17.067 8.534L330.667 320h59.048a42.67 42.67 0 0 1 36.952-21.333V64h42.666v384h-42.666v-64a42.67 42.67 0 0 1-36.952-21.333H320a21.33 21.33 0 0 1-17.067-8.534L181.333 192h-59.049a42.66 42.66 0 0 1-36.95 21.333V448H42.666z" clip-rule="evenodd"></svg:path>`,
})
export class IxTagConnectionViewIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
