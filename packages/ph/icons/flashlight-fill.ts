import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phFlashlightFillIcon],svg[ph-flashlight-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M184 16H72a16 16 0 0 0-16 16v45.33a16.12 16.12 0 0 0 3.2 9.6L80 114.67V224a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16V114.67l20.8-27.74a16.12 16.12 0 0 0 3.2-9.6V32a16 16 0 0 0-16-16m-48 136a8 8 0 0 1-16 0v-32a8 8 0 0 1 16 0ZM72 56V32h112v24Z"></svg:path>`,
})
export class PhFlashlightFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
