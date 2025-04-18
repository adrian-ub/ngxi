import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faSolidPenFancyIcon],svg[fa-solid-pen-fancy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M79.18 282.94a32 32 0 0 0-20.24 20.24L0 480l4.69 4.69l92.89-92.89c-.66-2.56-1.57-5.03-1.57-7.8c0-17.67 14.33-32 32-32s32 14.33 32 32s-14.33 32-32 32c-2.77 0-5.24-.91-7.8-1.57l-92.89 92.89L32 512l176.82-58.94a31.98 31.98 0 0 0 20.24-20.24l33.07-84.07l-98.88-98.88zM369.25 28.32L186.14 227.81l97.85 97.85l199.49-183.11C568.4 67.48 443.73-55.94 369.25 28.32"></svg:path>`,
})
export class FaSolidPenFancyIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
