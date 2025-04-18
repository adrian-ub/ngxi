import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhAntennaIcon],svg[whh-antenna-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m865.417 119l-353 467v374q0 26-18.5 45t-45.5 19t-45.5-19t-18.5-45V586l-353-467q-31-19-31-55q0-26 19-45t45-19h768q27 0 45.5 19t18.5 45q0 36-31 55m-153 9h-200v265zm-328 0h-200l200 265z"></svg:path>`,
})
export class WhhAntennaIcon {
  readonly viewBox = input("0 0 897 1024")
  readonly width = input("0.88em")
  readonly height = input("1em")
}
