import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsImageActualSizeIcon],svg[hugeicons-image-actual-size-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.498 20.02a9.2 9.2 0 0 1-5.986-2.205L2.528 22.8c-.15.15-.34.22-.53.22s-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l4.984-4.984a9.2 9.2 0 0 1-2.204-5.985c0-5.1 4.15-9.25 9.25-9.25s9.25 4.15 9.25 9.25s-4.15 9.25-9.25 9.25m0-17c-4.27 0-7.75 3.48-7.75 7.75s3.48 7.75 7.75 7.75s7.75-3.48 7.75-7.75s-3.48-7.75-7.75-7.75m-4.25 10.25c0 .41.34.75.75.75h.01c.41 0 .75-.34.75-.75v-5c0-.26-.14-.5-.36-.64a.76.76 0 0 0-.73-.03l-1 .5c-.38.19-.53.64-.34 1.01c.17.34.57.49.92.37zm8.25.75c-.41 0-.75-.34-.75-.75V9.48a.756.756 0 0 1-.92-.37a.745.745 0 0 1 .34-1.01l1-.5c.23-.12.51-.1.73.03c.22.14.36.38.36.64v5c0 .41-.34.75-.75.75zm-4.75-1.74c0 .41.34.75.75.75v.01c.41 0 .75-.34.75-.76a.749.749 0 1 0-1.5 0m0-3c0 .41.34.75.75.75v.01c.41 0 .75-.34.75-.76a.749.749 0 1 0-1.5 0" color="currentColor"></svg:path>`,
})
export class HugeiconsImageActualSizeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
