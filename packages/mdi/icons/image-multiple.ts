import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiImageMultipleIcon],svg[mdi-image-multiple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 16V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2m-11-4l2.03 2.71L16 11l4 5H8M2 6v14a2 2 0 0 0 2 2h14v-2H4V6"></svg:path>`,
})
export class MdiImageMultipleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
