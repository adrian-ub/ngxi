import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiTranscribeCloseIcon],svg[mdi-transcribe-close-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 23l-4-4h8zm8-20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-2 12v-2h-5.5l-2 2zM6 15h2.5l6.85-6.88c.2-.19.2-.51 0-.7l-1.76-1.77c-.2-.2-.52-.2-.71 0L6 12.53z"></svg:path>`,
})
export class MdiTranscribeCloseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
