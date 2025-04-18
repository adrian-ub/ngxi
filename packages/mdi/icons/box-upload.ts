import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiBoxUploadIcon],svg[mdi-box-upload-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M4.996 3h14.012l1.728 2.993l-.006.004c.172.294.27.637.27 1.003v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7c0-.362.096-.702.264-.994l-.003-.002L4.996 3zm.577 1l-.577 1H19.008l-.578-1H5.573zM7 15h3v2h4v-2h3l-5-5l-5 5z" fill="currentColor"></svg:path>`,
})
export class MdiBoxUploadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
