import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonStatusResolvedIcon],svg[carbon-status-resolved-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M21 28.414l-5-5.001L17.413 22L21 25.586L28.585 18L30 19.415l-9 8.999z" fill="currentColor"></svg:path><svg:path d="M12 15.59L9.41 13L8 14.41l4 4l7-7L17.59 10L12 15.59z" fill="currentColor"></svg:path><svg:path d="M11.82 25.802a11.992 11.992 0 1 1 13.982-9.621l-1.967-.362a10.001 10.001 0 1 0-11.654 8.016z" fill="currentColor"></svg:path>`,
})
export class CarbonStatusResolvedIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
