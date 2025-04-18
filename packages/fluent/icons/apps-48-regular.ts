import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentApps48RegularIcon],svg[fluent-apps-48-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m32.013 7.013l-6.5 6.5a1.75 1.75 0 0 0 0 2.475l6.5 6.5c.334.334.77.505 1.209.512h.056a1.74 1.74 0 0 0 1.21-.512l6.5-6.5a1.75 1.75 0 0 0 0-2.475l-6.5-6.5a1.75 1.75 0 0 0-2.475 0M28.989 23L25 19.01V23zM25 10.49l5.245-5.245a4.25 4.25 0 0 1 6.01 0l6.5 6.5a4.25 4.25 0 0 1 0 6.01L37.511 23h.239A4.25 4.25 0 0 1 42 27.25v10.5A4.25 4.25 0 0 1 37.75 42h-27.5A4.25 4.25 0 0 1 6 37.75v-27.5A4.25 4.25 0 0 1 10.25 6h10.5A4.25 4.25 0 0 1 25 10.25zm8.206 15.01H25v14h12.75a1.75 1.75 0 0 0 1.75-1.75v-10.5a1.75 1.75 0 0 0-1.75-1.75zM8.5 10.25V23h14V10.25a1.75 1.75 0 0 0-1.75-1.75h-10.5a1.75 1.75 0 0 0-1.75 1.75m0 15.25v12.25c0 .967.784 1.75 1.75 1.75H22.5v-14z"></svg:path>`,
})
export class FluentApps48RegularIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
