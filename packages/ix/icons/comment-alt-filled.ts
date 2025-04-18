import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixCommentAltFilledIcon],svg[ix-comment-alt-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M448 384.001V85.334H64v298.667h128l149.333 85.333v-85.333zM149.333 170.667h213.334v42.667H149.333zm0 85.334H256v42.666H149.333z" clip-rule="evenodd"></svg:path>`,
})
export class IxCommentAltFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
