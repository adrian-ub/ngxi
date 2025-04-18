import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderUnityIcon],svg[material-icon-theme-folder-unity-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#2196f3" d="m13.844 7.536l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124c-.468 0-.921-.164-1.28-.464"></svg:path><svg:path fill="#bbdefb" d="M23 15.25L18.5 13l3-1.5v-3L14 13v7.75l3-1.5v-4.5L21.5 17v6.75L17 22l-3 1.5l9 4.5l9-4.5l-3-1.5l-4.5 2.25V17.5l4.5-2.25v4l3 1.5V13l-7.5-4.5v3l3 1.5z"></svg:path>`,
})
export class MaterialIconThemeFolderUnityIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
