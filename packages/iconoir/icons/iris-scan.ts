import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirIrisScanIcon],svg[iconoir-iris-scan-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M6 3H3v3m9 8a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path><svg:path d="M21 12c-1.889 2.991-5.282 6-9 6s-7.111-3.009-9-6c2.299-2.842 4.992-6 9-6s6.701 3.158 9 6m-3-9h3v3M6 21H3v-3m15 3h3v-3"></svg:path></svg:g>`,
})
export class IconoirIrisScanIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
