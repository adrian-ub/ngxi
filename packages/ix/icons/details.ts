import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixDetailsIcon],svg[ix-details-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M448 128v320H128V128zm-42.667 42.667H170.667v234.666h234.666zM384 64v42.667l-277.334-.001V384H64V64zm-21.333 234.667v42.666H213.333v-42.666zm0-85.334V256H213.333v-42.667z"></svg:path>`,
})
export class IxDetailsIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
