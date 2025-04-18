import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconOperationFilledIcon],svg[lsicon-operation-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14 2H2v10h5.5v1H5v1h6v-1H8.5v-1H14zM4.812 8.89l2.15-1.72L8.47 8.676l3.35-2.792l-.64-.768l-2.648 2.208L7.037 5.83l-2.85 2.28z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconOperationFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
