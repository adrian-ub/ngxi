import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsVuejsIcon],svg[proicons-vuejs-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" d="M5.701 4.57h3.161c.384 0 .739.202.936.531L12 8.791l2.203-3.69a1.09 1.09 0 0 1 .935-.531h3.16m-12.597 0h-1.86a1.09 1.09 0 0 0-.935 1.648l8.158 13.671a1.09 1.09 0 0 0 1.872 0l8.158-13.671a1.09 1.09 0 0 0-.935-1.648h-1.86M5.7 4.57L12 15.124L18.299 4.57"></svg:path>`,
})
export class ProiconsVuejsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
