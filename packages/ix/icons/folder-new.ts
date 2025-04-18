import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixFolderNewIcon],svg[ix-folder-new-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M469.334 128v298.667H42.667V85.334H220.75L274.709 128zm-42.667 42.667H259.875L205.917 128H85.334v256h341.333zM341.334 256v-42.667h-42.667V256H256v42.667h42.667v42.666h42.667v-42.666H384V256z" clip-rule="evenodd"></svg:path>`,
})
export class IxFolderNewIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
