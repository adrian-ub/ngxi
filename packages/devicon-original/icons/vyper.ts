import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[deviconOriginalVyperIcon],svg[devicon-original-vyper-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M80 91.712L64 64L48 91.712l16 27.712z" opacity=".8"></svg:path><svg:path d="M96 64L80 36.287L64 64l16 27.712zm-32 0L48 36.287L32 64l16 27.712z" opacity=".6"></svg:path><svg:path d="M112 36.287L96 8.574L80 36.287L96 64zm-64 0L64 64l16-27.713l-8-13.857H56zm0 0L32 8.574L16 36.287L32 64z" opacity=".45"></svg:path><svg:path d="M128 8.574H96l16 27.712zm-96 0H0l16 27.712z" opacity=".3"></svg:path>`,
})
export class DeviconOriginalVyperIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
