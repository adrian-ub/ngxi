import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixMinimizeIcon],svg[ix-minimize-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m239.386 281.309l-.021 149.321h-42.667l-.001-76.229L94.17 456.671L64 426.501l102.796-102.538H90.031l.022-42.654zM427.76 64l30.17 30.17l-102.55 101.805h76.005v42.667H282.053V89.31h42.667l-.001 76.985z"></svg:path>`,
})
export class IxMinimizeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
