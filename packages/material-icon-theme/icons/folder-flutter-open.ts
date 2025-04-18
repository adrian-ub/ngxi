import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderFlutterOpenIcon],svg[material-icon-theme-folder-flutter-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#03a9f4" d="M29 12H9.4a2 2 0 0 0-1.9 1.4L4 24V10h24a2 2 0 0 0-2-2H15.1a2 2 0 0 1-1.3-.5l-1.2-1a2 2 0 0 0-1.3-.5H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.8-11.2A2 2 0 0 0 29 12"></svg:path><svg:path fill="#b3e5fc" d="m20 10l-8 8l4 4l12-12zm4 8l-6 6l6 6h8l-6-6l6-6z"></svg:path>`,
})
export class MaterialIconThemeFolderFlutterOpenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
