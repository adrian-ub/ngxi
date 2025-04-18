import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2DockLeftMirroredIcon],svg[fluent-mdl2-dock-left-mirrored-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2048 384H0v1152h2048zm-128 128v896h-384V512zM128 1408V512h1280v896z"></svg:path>`,
})
export class FluentMdl2DockLeftMirroredIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
