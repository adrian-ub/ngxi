import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiSatelliteIcon],svg[zmdi-satellite-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M341 0q18 0 30.5 12.5T384 43v298q0 18-12.5 30.5T341 384H43q-18 0-30.5-12.5T0 341V43q0-18 12.5-30.5T43 0zM43 42v65q26 0 45-19t19-46zm0 150q62 0 105.5-44T192 42h-43q0 45-31 76t-75 31zm0 128h298l-96-128l-74 96l-54-64z"></svg:path>`,
})
export class ZmdiSatelliteIcon {
  readonly viewBox = input("0 0 384 384")
  readonly width = input("1em")
  readonly height = input("1em")
}
