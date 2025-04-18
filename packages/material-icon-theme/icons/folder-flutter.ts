import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderFlutterIcon],svg[material-icon-theme-folder-flutter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#03a9f4" d="m13.8 7.5l-1.2-1a2 2 0 0 0-1.3-.5H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.1a2 2 0 0 1-1.3-.5"></svg:path><svg:path fill="#b3e5fc" d="m20 10l-8 8l4 4l12-12zm4 8l-6 6l6 6h8l-6-6l6-6z"></svg:path>`,
})
export class MaterialIconThemeFolderFlutterIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
