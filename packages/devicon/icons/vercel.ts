import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[deviconVercelIcon],svg[devicon-vercel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M64.002 8.576L128 119.424H0Zm0 0"></svg:path>`,
})
export class DeviconVercelIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
