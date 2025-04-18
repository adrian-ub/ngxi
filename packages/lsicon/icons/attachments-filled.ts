import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconAttachmentsFilledIcon],svg[lsicon-attachments-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.05 8A3.5 3.5 0 0 1 8 3.05L12.95 8A3.5 3.5 0 0 1 8 12.95l-1.944-1.945A1.75 1.75 0 1 1 8.53 8.53l2.299 2.298l-.708.708l-2.298-2.299a.75.75 0 1 0-1.06 1.061l1.944 1.945a2.5 2.5 0 0 0 3.536-3.536l-4.95-4.95a2.5 2.5 0 1 0-3.536 3.536l.354.353l-.707.708z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconAttachmentsFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
