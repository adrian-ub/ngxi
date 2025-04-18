import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixLocationFilledIcon],svg[ix-location-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M256 42.667c82.475 0 149.334 66.859 149.334 149.333c0 27.204-7.254 52.694-19.983 74.676Q372.62 288.657 256 490.667q-116.622-202.01-129.35-223.991c-12.73-21.982-19.984-47.472-19.984-74.676c0-82.474 66.859-149.333 149.333-149.333M256 128c-35.346 0-64 28.654-64 64s28.654 64 64 64s64-28.653 64-64c0-35.346-28.653-64-64-64"></svg:path>`,
})
export class IxLocationFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
