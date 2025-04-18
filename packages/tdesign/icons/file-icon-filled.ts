import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignFileIconFilledIcon],svg[tdesign-file-icon-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 1H3v22h2v-9.5h5v.145a3.5 3.5 0 0 1 1-.145h3v.145a3.5 3.5 0 0 1 1-.145h1a3.5 3.5 0 0 1 1 .145V13.5h4V9h-8z"></svg:path><svg:path fill="currentColor" d="M21 7v-.414L15.414 1H15v6zM8.5 23v-8h-2v8zm2.5-8a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h1.5v-2H11v-4h1.5v-2zm4 0a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2zm0 6v-4h1v4zm6.5-6h-3v8h2v-6h1v6h2v-6a2 2 0 0 0-2-2"></svg:path>`,
})
export class TdesignFileIconFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
