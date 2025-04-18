import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsControlPanelIcon],svg[lineicons-control-panel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M48.4 1.8H15.6c-3.4 0-6.3 2.8-6.3 6.3v48c0 3.4 2.8 6.3 6.3 6.3h32.7c3.4 0 6.3-2.8 6.3-6.3V8c0-3.4-2.8-6.2-6.2-6.2M50.1 56c0 1-.8 1.8-1.8 1.8H15.6c-1 0-1.8-.8-1.8-1.8V8c0-1 .8-1.8 1.8-1.8h32.7c1 0 1.8.8 1.8 1.8z"></svg:path><svg:path fill="currentColor" d="M42.2 14.4H26.6v-.3c0-1.2-1-2.3-2.3-2.3s-2.3 1-2.3 2.3v.3h-.3c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h.3v.3c0 1.2 1 2.3 2.3 2.3s2.3-1 2.3-2.3V19h15.6c1.2 0 2.3-1 2.3-2.3s-1.1-2.3-2.3-2.3m0 15.4h-.3v-.3c0-1.2-1-2.3-2.3-2.3s-2.3 1-2.3 2.3v.3H21.8c-1.2 0-2.3 1-2.3 2.3c0 1.2 1 2.3 2.3 2.3h15.6v.3c0 1.2 1 2.3 2.3 2.3s2.3-1 2.3-2.3v-.3h.3c1.2 0 2.3-1 2.3-2.3c-.2-1.3-1.2-2.3-2.4-2.3m0 15.3H26.6v-.3c0-1.2-1-2.3-2.3-2.3s-2.3 1-2.3 2.3v.3h-.3c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h.3v.3c0 1.2 1 2.3 2.3 2.3s2.3-1 2.3-2.3v-.3h15.6c1.2 0 2.3-1 2.3-2.3s-1.1-2.3-2.3-2.3"></svg:path>`,
})
export class LineiconsControlPanelIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
