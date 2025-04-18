import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderElementIcon],svg[material-icon-theme-folder-element-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ab47bc" d="m13.84 7.54l-1.28-1.08A2 2 0 0 0 11.28 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.12a2 2 0 0 1-1.28-.46"></svg:path><svg:path fill="#e1bee7" d="m21.15 25.74l-8.3-5.2A1.8 1.8 0 0 1 12 19v-.98l9.15 5.72a1.6 1.6 0 0 0 1.7 0L32 18v1a1.8 1.8 0 0 1-.85 1.53l-8.3 5.21a1.6 1.6 0 0 1-1.7 0m0 4l-8.3-5.2A1.8 1.8 0 0 1 12 23v-.98l9.15 5.72a1.6 1.6 0 0 0 1.7 0L32 22v1a1.8 1.8 0 0 1-.85 1.53l-8.3 5.21a1.6 1.6 0 0 1-1.7 0m-.08-19.46L12 16l9.07 5.72c.56.37 1.29.37 1.85 0L31.99 16l-9.07-5.72a1.68 1.68 0 0 0-1.85 0"></svg:path>`,
})
export class MaterialIconThemeFolderElementIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
