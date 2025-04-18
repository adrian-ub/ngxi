import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsVuejsIcon],svg[lineicons-vuejs-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.4 3.442h-3.262l-2.126 3.543l-2.135-3.542l-2.369-.001H2l10.026 17.116L22 3.442zm-5.378 13.566L5.125 5.232h2.528l4.375 7.528l4.34-7.528h2.516z"></svg:path>`,
})
export class LineiconsVuejsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
