import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesInstagramSolidIcon],svg[bubbles-instagram-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.656 2H4.344A2.347 2.347 0 0 0 2 4.344v11.312A2.347 2.347 0 0 0 4.344 18h11.312A2.347 2.347 0 0 0 18 15.656V4.344A2.347 2.347 0 0 0 15.656 2m-5.625 12.188a4.223 4.223 0 0 1-4.219-4.22a4.223 4.223 0 0 1 4.22-4.218a4.223 4.223 0 0 1 4.218 4.219a4.224 4.224 0 0 1-4.219 4.219m4.688-7.5a1.408 1.408 0 0 1 0-2.813a1.407 1.407 0 0 1 0 2.813"></svg:path>`,
})
export class BubblesInstagramSolidIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
