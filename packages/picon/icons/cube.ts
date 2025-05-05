import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconCubeIcon],svg[picon-cube-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m4 0l4 2v4L4 8L0 6V2m4 5.5l3.5-1.75V2L4 3.5"></svg:path>`,
})
export class PiconCubeIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
