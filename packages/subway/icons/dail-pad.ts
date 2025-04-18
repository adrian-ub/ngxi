import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[subwayDailPadIcon],svg[subway-dail-pad-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M202.5 93.1h93.1V0h-93.1zM342.1 0v93.1h93.1V0zM62.8 93.1h93.1V0H62.8zm139.7 139.6h93.1v-93.1h-93.1zm139.6 0h93.1v-93.1h-93.1zm-279.3 0h93.1v-93.1H62.8zm139.7 139.7h93.1v-93.1h-93.1zm139.6 0h93.1v-93.1h-93.1zm-279.3 0h93.1v-93.1H62.8zM202.5 512h93.1v-93.1h-93.1z"></svg:path>`,
})
export class SubwayDailPadIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
