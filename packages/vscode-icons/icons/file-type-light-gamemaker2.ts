import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vscodeIconsFileTypeLightGamemaker2Icon],svg[vscode-icons-file-type-light-gamemaker2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M16.011 2L30 16c-2.7 0-5.394.005-8.09 0v8.112c-1.96 1.965-3.928 3.922-5.885 5.888L2 16.008ZM10.12 16.008l5.889 5.892V16c1.96 0 3.92.005 5.88 0c-1.949-1.973-3.92-3.925-5.878-5.888q-2.947 2.946-5.891 5.896"></svg:path>`,
})
export class VscodeIconsFileTypeLightGamemaker2Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
