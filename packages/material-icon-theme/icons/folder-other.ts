import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderOtherIcon],svg[material-icon-theme-folder-other-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ff7043" d="m13.844 7.536l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></svg:path><svg:path fill="#ffccbc" d="M22 10a10 10 0 1 0 10 10a10 10 0 0 0-10-10m-6 12.125a2 2 0 1 1 2-2a2 2 0 0 1-2 2m6 0a2 2 0 1 1 2-2a2 2 0 0 1-2 2m6 0a2 2 0 1 1 2-2a2 2 0 0 1-2 2"></svg:path>`,
})
export class MaterialIconThemeFolderOtherIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
