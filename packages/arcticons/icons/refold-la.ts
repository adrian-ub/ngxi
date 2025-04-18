import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsRefoldLaIcon],svg[arcticons-refold-la-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M37.117 18.284L33.16 31.623l-16.63 4.452l-.713-.705l-.951-23.445l19.627 15.207M15.818 35.37L3.5 23.166l11.972 3.671m12.451-4.796l3.189-3.265"></svg:path><svg:path d="m44.5 17.678l-8.537-3.869l-4.851 4.967z"></svg:path></svg:g>`,
})
export class ArcticonsRefoldLaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
