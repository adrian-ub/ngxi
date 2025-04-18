import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiVolumeHighIcon],svg[mynaui-volume-high-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M13 3v18c-3.5 0-6.1-4.58-6.1-4.58s-3.9.586-3.9-1V8.505c0-1.586 3.9-1 3.9-1S9.5 3 13 3m5.1 16c3.866-3.866 3.866-10.134 0-14"></svg:path><svg:path d="M16 16a5.657 5.657 0 0 0 0-8"></svg:path></svg:g>`,
})
export class MynauiVolumeHighIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
