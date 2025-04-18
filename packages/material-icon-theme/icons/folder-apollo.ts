import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderApolloIcon],svg[material-icon-theme-folder-apollo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#7e57c2" d="m13.844 7.536l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></svg:path><svg:path fill="#d1c4e9" d="M25 28h3l-4-12h-4l-4 12h3l.667-2h3.01L22 24h-1.667L22 19z"></svg:path><svg:path fill="#d1c4e9" d="M28 12a2 2 0 0 0-.416.045a10.996 10.996 0 0 0-17.102 13.473a1.003 1.003 0 0 0 1.72-1.034A8.986 8.986 0 0 1 26.1 13.406A2 2 0 0 0 26 14a2 2 0 1 0 2-2"></svg:path>`,
})
export class MaterialIconThemeFolderApolloIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
