import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fa6SolidBorderNoneIcon],svg[fa6-solid-border-none-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32 480a32 32 0 1 1 0-64a32 32 0 1 1 0 64m96-64a32 32 0 1 1 0 64a32 32 0 1 1 0-64m0-384a32 32 0 1 1 0 64a32 32 0 1 1 0-64m0 256a32 32 0 1 1 0-64a32 32 0 1 1 0 64m192 128a32 32 0 1 1 0 64a32 32 0 1 1 0-64m0-320a32 32 0 1 1 0-64a32 32 0 1 1 0 64m0 128a32 32 0 1 1 0 64a32 32 0 1 1 0-64m-96 256a32 32 0 1 1 0-64a32 32 0 1 1 0 64m0-448a32 32 0 1 1 0 64a32 32 0 1 1 0-64m0 256a32 32 0 1 1 0-64a32 32 0 1 1 0 64m192 128a32 32 0 1 1 0 64a32 32 0 1 1 0-64m0-384a32 32 0 1 1 0 64a32 32 0 1 1 0-64M32 96a32 32 0 1 1 0-64a32 32 0 1 1 0 64m384 128a32 32 0 1 1 0 64a32 32 0 1 1 0-64M32 288a32 32 0 1 1 0-64a32 32 0 1 1 0 64m192 32a32 32 0 1 1 0 64a32 32 0 1 1 0-64m192 64a32 32 0 1 1 0-64a32 32 0 1 1 0 64M32 320a32 32 0 1 1 0 64a32 32 0 1 1 0-64m384-128a32 32 0 1 1 0-64a32 32 0 1 1 0 64M32 128a32 32 0 1 1 0 64a32 32 0 1 1 0-64m192 64a32 32 0 1 1 0-64a32 32 0 1 1 0 64"></svg:path>`,
})
export class Fa6SolidBorderNoneIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}
