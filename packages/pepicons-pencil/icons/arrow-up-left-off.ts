import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilArrowUpLeftOffIcon],svg[pepicons-pencil-arrow-up-left-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:g fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M5.948 12.145a.5.5 0 0 1-.453-.543l.471-5.186a.5.5 0 0 1 .996.09l-.471 5.186a.5.5 0 0 1-.543.453"></svg:path><svg:path d="M12.148 5.945a.5.5 0 0 1-.453.543L6.51 6.96a.5.5 0 0 1-.09-.996l5.185-.472a.5.5 0 0 1 .543.453"></svg:path><svg:path d="M6.647 6.643a.5.5 0 0 1 .707 0l6.535 6.536a.5.5 0 1 1-.707.707L6.646 7.351a.5.5 0 0 1 0-.708"></svg:path></svg:g><svg:path d="M1.15 1.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path></svg:g>`,
})
export class PepiconsPencilArrowUpLeftOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
