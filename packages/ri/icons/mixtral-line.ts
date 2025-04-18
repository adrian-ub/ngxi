import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riMixtralLineIcon],svg[ri-mixtral-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3h5.2v3.2h3.2v3.2h1.2V6.2h3.2V3H21v18h-5.2v-6.4h-1.2v3.2H9.4v-3.2H8.2V21H3zm2 2v14h1.2v-6.4h5.2v3.2h1.2v-3.2h5.2V19H19V5h-1.2v3.2h-3.2v3.2H9.4V8.2H6.2V5z"></svg:path>`,
})
export class RiMixtralLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
