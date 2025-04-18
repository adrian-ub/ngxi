import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqAttachmentIcon],svg[marketeq-attachment-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#306CFE" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M37.5 20.833V31.25a12.5 12.5 0 0 1-25 0V14.583a8.333 8.333 0 0 1 8.333-8.333v0a8.333 8.333 0 0 1 8.334 8.333V31.25a4.167 4.167 0 1 1-8.334 0V14.583"></svg:path>`,
})
export class MarketeqAttachmentIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
