import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeBuildkiteIcon],svg[material-icon-theme-buildkite-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#00e676" d="m12 22l-8-4V8l8 4zm8-14v10h4l4-4"></svg:path><svg:path fill="#00c853" d="m12 22l8-4V8l-8 4zm8 6l8-4V14l-8 4z"></svg:path>`,
})
export class MaterialIconThemeBuildkiteIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
