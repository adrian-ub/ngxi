import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilVideoIcon],svg[cil-video-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m461 132l-101 39.277V72H16v368h344V332.723L461 372h35V132Zm3 206.833l-136-52.89V408H48V104h280v114.057l136-52.89Z"></svg:path>`,
})
export class CilVideoIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
