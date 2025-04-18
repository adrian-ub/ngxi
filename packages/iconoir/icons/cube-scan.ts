import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirCubeScanIcon],svg[iconoir-cube-scan-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M6 3H3v3m15-3h3v3M6 21H3v-3m15 3h3v-3m-8.485-.309l4-2.4a1 1 0 0 0 .485-.857v-3.868a1 1 0 0 0-.485-.857l-4-2.4a1 1 0 0 0-1.03 0l-4 2.4a1 1 0 0 0-.485.857v3.868a1 1 0 0 0 .486.857l4 2.4a1 1 0 0 0 1.028 0"></svg:path><svg:path d="M7.5 10.5L12 13m0 0s3.764-2.05 4.5-2.5M12 13v4.5"></svg:path></svg:g>`,
})
export class IconoirCubeScanIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
