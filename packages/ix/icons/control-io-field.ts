import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixControlIoFieldIcon],svg[ix-control-io-field-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M430.545 128c21.422 0 38.788 19.103 38.788 42.667v170.666c0 23.564-17.366 42.667-38.788 42.667H81.455c-21.422 0-38.788-19.103-38.788-42.667V170.667c0-23.564 17.366-42.667 38.788-42.667zm-3.878 42.667H85.333v170.666h341.334zm-277.334 42.666H128V192h64v21.333h-21.333v85.334H192V320h-64v-21.333h21.333z"></svg:path>`,
})
export class IxControlIoFieldIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
