import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phFlashlightThinIcon],svg[ph-flashlight-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M184 20H72a12 12 0 0 0-12 12v45.33a12.05 12.05 0 0 0 2.4 7.2l20.8 27.74a4 4 0 0 1 .8 2.4V224a12 12 0 0 0 12 12h64a12 12 0 0 0 12-12V114.67a4 4 0 0 1 .8-2.4l20.8-27.74a12.05 12.05 0 0 0 2.4-7.2V32a12 12 0 0 0-12-12M72 28h112a4 4 0 0 1 4 4v28H68V32a4 4 0 0 1 4-4m115.2 51.73l-20.8 27.74a12.05 12.05 0 0 0-2.4 7.2V224a4 4 0 0 1-4 4H96a4 4 0 0 1-4-4V114.67a12.05 12.05 0 0 0-2.4-7.2L68.8 79.73a4 4 0 0 1-.8-2.4V68h120v9.33a4 4 0 0 1-.8 2.4M132 120v32a4 4 0 0 1-8 0v-32a4 4 0 0 1 8 0"></svg:path>`,
})
export class PhFlashlightThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
