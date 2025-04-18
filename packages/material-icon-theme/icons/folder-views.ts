import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderViewsIcon],svg[material-icon-theme-folder-views-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ff7043" d="m13.844 7.536l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></svg:path><svg:path fill="#ffccbc" d="m14 12l2 16l7 2l7-2l2-16Zm8 5.899L18.66 20L22 22.102V24l-5.235-3.386v-1.227L22 16Zm7.235 2.728L24 24v-1.898L27.363 20L24 17.899V16l5.235 3.373Z"></svg:path>`,
})
export class MaterialIconThemeFolderViewsIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
