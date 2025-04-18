import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirGoogleIcon],svg[iconoir-google-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M15.548 8.303A5.15 5.15 0 0 0 12.108 7C9.288 7 7 9.239 7 12s2.287 5 5.109 5c3.47 0 4.751-2.57 4.891-4.583h-4.159"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M21 8v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5"></svg:path></svg:g>`,
})
export class IconoirGoogleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
