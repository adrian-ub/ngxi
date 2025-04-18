import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineLockRotationSolidIcon],svg[streamline-lock-rotation-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M1.5 7a5.5 5.5 0 0 1 9.82-3.405l-.966.965a.5.5 0 0 0 .353.854H13.5a.5.5 0 0 0 .5-.5V2.12a.5.5 0 0 0-.854-.354l-.76.761a7 7 0 1 0 1.427 6.086a.75.75 0 0 0-1.46-.344A5.5 5.5 0 0 1 1.5 7"></svg:path><svg:path d="M6.125 5.813a.875.875 0 1 1 1.75 0v.5h-1.75zm-1.25.719v-.72a2.125 2.125 0 1 1 4.25 0v.72a1 1 0 0 1 .375.78v2a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1v-2c0-.315.146-.597.375-.78"></svg:path></svg:g>`,
})
export class StreamlineLockRotationSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
