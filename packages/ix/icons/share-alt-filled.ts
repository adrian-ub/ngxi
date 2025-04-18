import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixShareAltFilledIcon],svg[ix-share-alt-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M213.333 192v170.667h85.334V192h106.666v277.333H106.667V192zM256 28.194l103.434 103.433l-30.17 30.17l-51.931-51.939v231.475h-42.666V109.858l-51.931 51.939l-30.17-30.17z" clip-rule="evenodd"></svg:path>`,
})
export class IxShareAltFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
