import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixPinFilledIcon],svg[ix-pin-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m301.755 327.147l107.501-107.651l30.049 29.943l30.05-30.006L292.61 42.667l-30.007 30.028l29.943 30.049l-107.65 107.501l-80.557-9.421l-61.672 61.63l88.34 88.298l-66.755 66.67l.106 30.028h30.199l66.712-66.457l88.298 88.34l61.63-61.63z"></svg:path>`,
})
export class IxPinFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
