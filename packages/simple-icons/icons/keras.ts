import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsKerasIcon],svg[simple-icons-keras-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 0H0v24h24zM8.45 5.16l.2.17v6.24l6.46-6.45h1.96l.2.4l-5.14 5.1l5.47 7.94l-.2.3h-1.94l-4.65-6.88l-2.16 2.08v4.6l-.19.2H7l-.2-.2V5.33l.17-.17z"></svg:path>`,
})
export class SimpleIconsKerasIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
