import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[raphaelWrench2Icon],svg[raphael-wrench2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m24.946 9.72l-2.872-.767l-.77-2.874l3.187-3.232a5.73 5.73 0 0 0-5.847 1.39a5.75 5.75 0 0 0-1.28 6.173l-3.475 3.48l-3.478 3.477a5.75 5.75 0 0 0-6.173 1.277a5.73 5.73 0 0 0-1.39 5.85l3.23-3.19l2.875.77l.77 2.873l-3.24 3.197a5.743 5.743 0 0 0 7.146-7.586l3.464-3.464l3.464-3.463c2.07.83 4.523.407 6.202-1.27a5.73 5.73 0 0 0 1.384-5.877z"></svg:path>`,
})
export class RaphaelWrench2Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
