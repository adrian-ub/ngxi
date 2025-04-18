import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignHomeFilledIcon],svg[tdesign-home-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 9.532L12 1.198L2 9.532V22h5.5v-8.5h9V22H22z"></svg:path><svg:path fill="currentColor" d="M14.5 22h-5v-6.5h5z"></svg:path>`,
})
export class TdesignHomeFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
