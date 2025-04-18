import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderTrashIcon],svg[material-icon-theme-folder-trash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill-rule="evenodd"><svg:path fill="#F44336" d="m221.5 120.58l-20.6-17.16A32 32 0 0 0 180.42 96H64c-17.67 0-32 14.33-32 32v256c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32V160c0-17.67-14.33-32-32-32H241.98a32 32 0 0 1-20.48-7.42"></svg:path><svg:path fill="#FFCDD2" d="M320 160v32h-96v32h32v192c0 17.63 14.38 32 32 32h160c17.63 0 32-14.37 32-32V224h32v-32h-96v-32zm0 96v128h32V256zm64 0v128h32V256z"></svg:path></svg:g>`,
})
export class MaterialIconThemeFolderTrashIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
