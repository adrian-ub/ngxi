import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phFigmaLogoThinIcon],svg[ph-figma-logo-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M184.46 96A36 36 0 0 0 168 28H96a36 36 0 0 0-16.46 68a36 36 0 0 0 1.56 64.76A40 40 0 1 0 140 196v-45.41A36 36 0 1 0 184.46 96M196 64a28 28 0 0 1-28 28h-28V36h28a28 28 0 0 1 28 28m-56 36h5.41a36.4 36.4 0 0 0-5.41 5.41ZM68 64a28 28 0 0 1 28-28h36v56H96a28 28 0 0 1-28-28m64 132a32 32 0 1 1-32-32h32Zm0-40H96a28 28 0 0 1 0-56h36Zm36 0a28 28 0 1 1 28-28a28 28 0 0 1-28 28"></svg:path>`,
})
export class PhFigmaLogoThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
