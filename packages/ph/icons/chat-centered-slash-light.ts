import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phChatCenteredSlashLightIcon],svg[ph-chat-centered-slash-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M52.44 36a6 6 0 0 0-10.1 6H40a14 14 0 0 0-14 14v128a14 14 0 0 0 14 14h61.59l14.25 25a14 14 0 0 0 24.32 0l14.25-25h29.12l20 22a6 6 0 0 0 8.88-8.08Zm98.49 150a6 6 0 0 0-5.21 3l-16 28a2 2 0 0 1-3.48 0l-16-28a6 6 0 0 0-5.21-3H40a2 2 0 0 1-2-2V56a2 2 0 0 1 2-2h12.62l120 132ZM230 56v130a6 6 0 0 1-12 0V56a2 2 0 0 0-2-2H98.52a6 6 0 1 1 0-12H216a14 14 0 0 1 14 14"></svg:path>`,
})
export class PhChatCenteredSlashLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
