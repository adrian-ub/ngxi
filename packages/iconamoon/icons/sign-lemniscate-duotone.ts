import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonSignLemniscateDuotoneIcon],svg[iconamoon-sign-lemniscate-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M17 17c-2.761 0-6-5-6-5s3.239-5 6-5a5 5 0 0 1 0 10" opacity=".16"></svg:path><svg:path stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M17 17c-2.761 0-6-5-6-5s3.239-5 6-5a5 5 0 0 1 0 10ZM6 8c2.21 0 5 4 5 4s-2.79 4-5 4a4 4 0 0 1 0-8Z"></svg:path></svg:g>`,
})
export class IconamoonSignLemniscateDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
