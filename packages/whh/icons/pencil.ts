import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhPencilIcon],svg[whh-pencil-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m780 949l-172-53l288-288l53 172q-61 18-106 63t-63 106M32 352Q0 319 0 271.5T33 192L192 33q32-33 79.5-33T352 32l512 512l-320 320zm937 493l55 179l-179-55q16-43 48.5-75.5T969 845"></svg:path>`,
})
export class WhhPencilIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
