import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryBoxLightFoldUpRightIcon],svg[memory-box-light-fold-up-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22h-2v-1H1v-9H0v-2h3v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1m-3 0v-1H8v-1H7v-1H6v-1H5v-1H4v-1H3v6Z"></svg:path>`,
})
export class MemoryBoxLightFoldUpRightIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
