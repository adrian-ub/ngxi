import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ouiStopSlashIcon],svg[oui-stop-slash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.259 3.034A1 1 0 0 0 12 3H4a1 1 0 0 0-1 1v8q0 .135.034.259zm.707.707l-9.225 9.225Q3.866 13 4 13h8a1 1 0 0 0 1-1V4q0-.135-.034-.259M4 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2"></svg:path>`,
})
export class OuiStopSlashIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
