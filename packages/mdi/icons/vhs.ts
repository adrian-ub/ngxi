import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiVhsIcon],svg[mdi-vhs-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zm.54 4H7v4H4.54c-.35-.61-.54-1.3-.54-2s.19-1.39.54-2M9 10h6v4H9zm8 0h2.46c.35.61.54 1.3.54 2s-.19 1.39-.54 2H17z"></svg:path>`,
})
export class MdiVhsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
