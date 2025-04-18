import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixSunriseFilledIcon],svg[ix-sunrise-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m256 42.668l89.751 87.837l-30.169 29.526l-38.249-37.432v95.744h-42.666v-95.744l-38.249 37.432l-30.17-29.526zm192 405.333v-41.756h-94.208c5.709-12.788 8.875-26.91 8.875-41.757c0-57.655-47.757-104.391-106.667-104.391s-106.667 46.736-106.667 104.391c0 14.847 3.167 28.969 8.876 41.757H64v41.756z"></svg:path><svg:path fill="currentColor" d="M405.333 364.488h64v-41.756h-64zm-298.666 0h-64v-41.756h64zm68.418-129.593L121.752 182.7l-30.17 29.526l53.333 52.195zM390.249 182.7l-53.334 52.195l30.17 29.526l53.333-52.195z"></svg:path>`,
})
export class IxSunriseFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
