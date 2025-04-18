import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRotateLeft01Icon],svg[hugeicons-rotate-left-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m20.007 14.567l-.648-.393a3 3 0 0 1-1.257-1.41L15.68 7.153a1.6 1.6 0 0 0-.352-.51c-.64-.614-1.747-.354-2.285.351c-.992 1.303.341 2.536.06 3.621L5.358 6.262c-1.8-.972-3.357 1.61-1.566 2.802l4.583 2.55c-.883 1.152-3.12 6.742-.253 8.447c.164.097.344.162.526.218l.349.108c.9.28 2.602.634 3.769.532c1.214-.105 1.975.542 2.913 1.082M9.362 4.965c.397.395 2.123.281 2.76.202m-2.76-.202c-.397-.396-.408-2.328-.329-2.963m.329 2.963c1.021-1.769 5.08-4.59 9.109-1.769C20.418 4.56 20.692 5.418 21 5.994" color="currentColor"></svg:path>`,
})
export class HugeiconsRotateLeft01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
