import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fileIconsDotenvIcon],svg[file-icons-dotenv-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 0v512h512V0zm74.178 463.246H32.49V421.56h41.687zm37.772-.285v-136.64h100.743l.208 24.54h-74.18v29.024h68.636l.196 23.085H138.72v35.008h74.918l.212 24.983zm232.751 0h-28.785l-53.527-86.757v86.757h-25.765v-136.64h27.87l53.942 90.056V326.32h26.265zm92.732 0h-31.27l-48.02-136.64h31.304l33.411 95.734l31.754-95.734h31.557z"></svg:path>`,
})
export class FileIconsDotenvIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
