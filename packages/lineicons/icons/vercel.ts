import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsVercelIcon],svg[lineicons-vercel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m12 3.333l10 17.333H2z" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsVercelIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
