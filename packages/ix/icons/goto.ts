import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixGotoIcon],svg[ix-goto-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m341.334 256l-128 128l-30.294-30.293l76.587-76.374H42.667v-42.666h216.96l-76.587-76.374L213.334 128zM416 309.333c29.456 0 53.334-23.878 53.334-53.333S445.456 202.667 416 202.667c-29.455 0-53.333 23.878-53.333 53.333s23.878 53.333 53.333 53.333"></svg:path>`,
})
export class IxGotoIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
