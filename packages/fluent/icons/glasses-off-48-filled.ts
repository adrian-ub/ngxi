import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentGlassesOff48FilledIcon],svg[fluent-glasses-off-48-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m34.232 36l7.634 7.634a1.25 1.25 0 0 0 1.768-1.768l-37.5-37.5a1.25 1.25 0 1 0-1.768 1.768l6.838 6.838l-5.744 6.21c-.287.263-.54.563-.75.892a4.25 4.25 0 0 0-.71 2.35V29.5a6.5 6.5 0 0 0 6.5 6.5h5a6.5 6.5 0 0 0 6.5-6.5v-5h.732L26 27.768V29.5a6.5 6.5 0 0 0 6.5 6.5zm-18-18H9.96l3.014-3.259zM44 29.5a6.5 6.5 0 0 1-3.931 5.973l-13.96-13.96A4.5 4.5 0 0 1 30.5 18h7.541l-4.568-4.938a1.75 1.75 0 0 0-1.285-.562H29.25a1.25 1.25 0 1 1 0-2.5h2.938a4.25 4.25 0 0 1 3.12 1.364l7.232 7.818c.287.263.54.563.75.892c.46.693.71 1.51.71 2.35zm-25.25-17h-1.654l-2.361-2.361A4.3 4.3 0 0 1 15.812 10h2.938a1.25 1.25 0 1 1 0 2.5"></svg:path>`,
})
export class FluentGlassesOff48FilledIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
