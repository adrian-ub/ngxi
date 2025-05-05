import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignFileOnenoteFilledIcon],svg[tdesign-file-onenote-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.414 1L21 6.586V23H3V1zM14.5 7.5H19L14.5 3zM13 10H9v8h2v-6h2v6h2v-6a2 2 0 0 0-2-2"></svg:path>`,
})
export class TdesignFileOnenoteFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
