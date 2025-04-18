import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fileIconsAdobeFuseIcon],svg[file-icons-adobe-fuse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M0 0h512v512H0zm121.211 363.668v-256.03h133.262l4.523 38.001h-95.945v72.932h85.6v37.618h-85.6v107.48zm162.58-7.47v-40.711c34.362 22.453 76.634 20.012 75.62-2.487c-1.037-30.992-75.265-27.598-75.62-86.751c1.194-47.204 50.591-67.087 107.864-47.622v39.782c-22.235-13.228-67.123-19.944-68.326 5.153c-.46 28.925 78.468 28.45 76.77 86.367c.927 51.138-58.69 71.953-116.308 46.27" clip-rule="evenodd"></svg:path>`,
})
export class FileIconsAdobeFuseIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
