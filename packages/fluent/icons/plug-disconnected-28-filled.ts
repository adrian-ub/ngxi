import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPlugDisconnected28FilledIcon],svg[fluent-plug-disconnected-28-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.74 6.327a5.5 5.5 0 0 1-.495 7.212L20.3 15.483a.75.75 0 0 1-1.06 0l-6.718-6.717a.75.75 0 0 1 0-1.06l1.945-1.945a5.5 5.5 0 0 1 7.212-.495l3.044-3.044a.75.75 0 0 1 1.061 1.06zm-9.963 5.949a.75.75 0 0 0-1.06-1.061L9.59 13.341l-.822-.822a.75.75 0 0 0-1.06 0l-1.945 1.944a5.5 5.5 0 0 0-.495 7.212L2.224 24.72a.75.75 0 1 0 1.06 1.06l3.045-3.044a5.5 5.5 0 0 0 7.212-.494l1.944-1.945a.75.75 0 0 0 0-1.06l-.827-.828l2.126-2.125a.75.75 0 1 0-1.061-1.06l-2.125 2.125l-2.947-2.947z"></svg:path>`,
})
export class FluentPlugDisconnected28FilledIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
