import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderDartIcon],svg[material-icon-theme-folder-dart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#2196f3" d="m13.844 7.536l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></svg:path><svg:path fill="#bbdefb" d="M23.037 14.036L15.999 16l-1.948 7.036c-.147.533.058 1.273.458 1.654a486 486 0 0 1 5.49 5.31H26v-4h4v-6l-5.306-5.513c-.383-.397-1.125-.599-1.657-.45z"></svg:path>`,
})
export class MaterialIconThemeFolderDartIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
