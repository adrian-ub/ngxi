import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icomoonFreeQuestionIcon],svg[icomoon-free-question-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 11h2v2H7zm4-7a1 1 0 0 1 1 1v3l-3 2H7V9l3-2V6H5V4zM8 1.5c-1.736 0-3.369.676-4.596 1.904S1.5 6.264 1.5 8s.676 3.369 1.904 4.596S6.264 14.5 8 14.5s3.369-.676 4.596-1.904S14.5 9.736 14.5 8s-.676-3.369-1.904-4.596S9.736 1.5 8 1.5M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0"></svg:path>`,
})
export class IcomoonFreeQuestionIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
