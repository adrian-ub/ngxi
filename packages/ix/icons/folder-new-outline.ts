import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixFolderNewOutlineIcon],svg[ix-folder-new-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M277.334 213.333V256H320v42.666h-42.666v42.667h-42.667v-42.667H192V256h42.667v-42.667zm192-85.333v298.666H42.667V85.333H220.75L274.71 128zm-42.667 42.666H259.875L205.917 128H85.334v256h341.333z"></svg:path>`,
})
export class IxFolderNewOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
