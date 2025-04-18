import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsTakesamaIcon],svg[arcticons-takesama-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M37.776 19.427c-5.604 0-6.888-4.153-6.888-7.153c0 3-1.284 7.153-6.888 7.153s-6.887-4.153-6.887-7.153c0 3-1.285 7.153-6.888 7.153m6.887 4.364v3.9m13.776-3.9v3.9m-.579 5.167c-3.788 2.411-8.83 2.411-12.619 0"></svg:path>`,
})
export class ArcticonsTakesamaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
