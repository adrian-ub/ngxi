import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilCheckCircleIcon],svg[cil-check-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M426.072 86.928A238.75 238.75 0 0 0 88.428 424.572A238.75 238.75 0 0 0 426.072 86.928M257.25 462.5c-114 0-206.75-92.748-206.75-206.75S143.248 49 257.25 49S464 141.748 464 255.75S371.252 462.5 257.25 462.5"></svg:path><svg:path fill="currentColor" d="m221.27 305.808l-73.413-73.412l-22.627 22.627l96.04 96.04l167.5-167.499l-22.628-22.627z"></svg:path>`,
})
export class CilCheckCircleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
