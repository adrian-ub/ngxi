import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2LandscapeOrientationIcon],svg[fluent-mdl2-landscape-orientation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2048 677v1115H0V128h1499zm-512-37h293l-293-293zm384 1024V768h-512V256H128v1408z"></svg:path>`,
})
export class FluentMdl2LandscapeOrientationIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
