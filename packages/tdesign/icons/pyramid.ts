import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignPyramidIcon],svg[tdesign-pyramid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11 2.96l4.44 7.893l1.06-1.928L23.69 22H.29zM13.227 11L11 7.04L8.772 11zm-5.58 2L3.71 20H10v-7zM12 13v4.107L14.259 13zm.691 7H15.5v-3h-1.16zm4.809 0h2.809l-1.65-3h-1.16zm.059-5l-1.06-1.925L15.442 15z"></svg:path>`,
})
export class TdesignPyramidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
