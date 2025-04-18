import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vscodeIconsFileTypeLightEleventy2Icon],svg[vscode-icons-file-type-light-eleventy2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#0d0303" d="M13.9 5.19v21.598H8.092V12.636q-1.41 1.1-2.727 1.782q-1.318.68-3.306 1.303v-4.838q2.932-.97 4.553-2.332t2.537-3.36zm16.041.02v21.6h-5.807V12.657q-1.41 1.1-2.728 1.782q-1.318.68-3.306 1.303v-4.837q2.932-.97 4.554-2.331q1.62-1.362 2.537-3.362z"></svg:path>`,
})
export class VscodeIconsFileTypeLightEleventy2Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
