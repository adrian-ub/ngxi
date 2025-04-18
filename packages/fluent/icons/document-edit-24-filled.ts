import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDocumentEdit24FilledIcon],svg[fluent-document-edit-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2v6a2 2 0 0 0 2 2h4.92c-.596.22-1.144.554-1.558.97l-6.05 6.092a2.8 2.8 0 0 0-.728 1.279l-.525 2.03A2.08 2.08 0 0 0 10.3 22H5.5A1.5 1.5 0 0 1 4 20.5v-17A1.5 1.5 0 0 1 5.5 2zm1.5.5V8a.5.5 0 0 0 .5.5h5.5zm-1.304 15.072l5.902-5.902a2.285 2.285 0 1 1 3.233 3.232l-5.903 5.902a2.7 2.7 0 0 1-1.247.707l-1.831.457a1.087 1.087 0 0 1-1.318-1.318l.457-1.83c.118-.473.362-.904.707-1.248"></svg:path>`,
})
export class FluentDocumentEdit24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
