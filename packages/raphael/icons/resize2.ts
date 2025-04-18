import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[raphaelResize2Icon],svg[raphael-resize2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2.332v26.5h26.5V2.33H2zm24.5 24.5H4V12.5h8.167V4.332H26.5zM15.63 17.65l5.47 5.468l-1.21 1.206l5.483 1.47l-1.47-5.482l-1.195 1.195l-5.467-5.466l1.21-1.207l-5.482-1.47l1.468 5.48l1.195-1.194z"></svg:path>`,
})
export class RaphaelResize2Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
