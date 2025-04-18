import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderAndroidIcon],svg[material-icon-theme-folder-android-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#8bc34a" d="m13.844 7.536l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></svg:path><svg:path fill="#dcedc8" d="M27.943 19.471L32 15.414L30.586 14l-4.333 4.333a11.01 11.01 0 0 0-10.505 0L11.414 14L10 15.414l4.057 4.057A10.98 10.98 0 0 0 10 28h22a10.98 10.98 0 0 0-4.057-8.529M18 26h-4v-4h4Zm10 0h-4v-4h4Z"></svg:path>`,
})
export class MaterialIconThemeFolderAndroidIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
