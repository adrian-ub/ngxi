import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentUninstallApp20FilledIcon],svg[fluent-uninstall-app-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.5 17A1.5 1.5 0 0 1 3 15.5v-11A1.5 1.5 0 0 1 4.5 3h4.75a1.5 1.5 0 0 1 1.5 1.5v4.75h4.75a1.5 1.5 0 0 1 1.5 1.5v4.75a1.5 1.5 0 0 1-1.5 1.5zm11-6.25h-4.75v4.75h4.75zm-6.25 0H4.5v4.75h4.75zm0-1.5V4.5H4.5v4.75zm5.03-2.47a.75.75 0 1 1-1.06-1.06l1.22-1.22l-1.22-1.22a.75.75 0 0 1 1.06-1.06l1.22 1.22l1.22-1.22a.75.75 0 1 1 1.06 1.06L16.56 4.5l1.22 1.22a.75.75 0 0 1-1.06 1.06L15.5 5.56z"></svg:path>`,
})
export class FluentUninstallApp20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
