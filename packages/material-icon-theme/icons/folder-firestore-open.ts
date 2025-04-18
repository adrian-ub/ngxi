import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderFirestoreOpenIcon],svg[material-icon-theme-folder-firestore-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2"><svg:path fill="#2196f3" fill-rule="nonzero" d="M28.967 12H9.442c-.859 0-1.627.553-1.898 1.368L4 24V10h24c0-1.097-.903-2-2-2H15.124c-.468 0-.921-.164-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4c-1.097 0-2 .903-2 2v16c0 1.097.903 2 2 2h22l4.805-11.212c.107-.249.162-.517.162-.788c0-1.097-.903-2-2-2"></svg:path><svg:path fill="#bbdefb" d="m24 10l-8 4v4l8-4l8 4v-4z"></svg:path><svg:path fill="#bbdefb" d="M16 20v4l8-4l8 4v-4l-8-4z"></svg:path><svg:path fill="#bbdefb" d="m24 24l3-1l4 2l-7 3z"></svg:path></svg:g>`,
})
export class MaterialIconThemeFolderFirestoreOpenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
