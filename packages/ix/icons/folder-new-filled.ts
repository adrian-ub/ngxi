import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixFolderNewFilledIcon],svg[ix-folder-new-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M220.75 85.333L274.71 128h194.625v298.666H42.667V85.333zm120.584 128h-42.667V256H256v42.666h42.667v42.667h42.667v-42.667H384V256h-42.666z"></svg:path>`,
})
export class IxFolderNewFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
