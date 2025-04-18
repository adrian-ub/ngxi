import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsFolderAddIcon],svg[lets-icons-folder-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="M19 14v-2c0-1.886 0-2.828-.586-3.414S16.886 8 15 8h-1.343c-.818 0-1.226 0-1.594-.152s-.657-.442-1.235-1.02l-.656-.656c-.578-.578-.868-.868-1.235-1.02S8.16 5 7.343 5H7c-1.886 0-2.828 0-3.414.586S3 7.114 3 9v6c0 1.886 0 2.828.586 3.414S5.114 19 7 19h7m2 0h3m0 0h3m-3 0v3m0-3v-3"></svg:path>`,
})
export class LetsIconsFolderAddIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
