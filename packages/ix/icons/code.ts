import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixCodeIcon],svg[ix-code-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m148.418 144.864l30.17 30.17l-80.898 80.915l80.898 80.915l-30.17 30.17L37.333 255.948zm214.978.037l-30.17 30.17l80.899 80.915l-80.899 80.915l30.17 30.17l111.085-111.085zm-94.918-16.759l41.213 11.043l-66.257 247.277l-41.213-11.043z"></svg:path>`,
})
export class IxCodeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
