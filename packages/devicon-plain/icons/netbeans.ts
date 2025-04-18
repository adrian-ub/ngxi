import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[deviconPlainNetbeansIcon],svg[devicon-plain-netbeans-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M64 0L6.223 32v64.445L64 128l57.777-31.555V32zm0 24l34.545 19.865L64 63.297L29.455 43.865zM29.445 46.154L63 65.03v36.39L29.445 82.966v-36.81zm69.11 0v36.81L65 101.42V65.03z"></svg:path>`,
})
export class DeviconPlainNetbeansIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
