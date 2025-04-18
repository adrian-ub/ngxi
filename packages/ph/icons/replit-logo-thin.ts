import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phReplitLogoThinIcon],svg[ph-replit-logo-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 92h-68V40a12 12 0 0 0-12-12H72a12 12 0 0 0-12 12v48a12 12 0 0 0 12 12h68v56H72a12 12 0 0 0-12 12v48a12 12 0 0 0 12 12h64a12 12 0 0 0 12-12v-52h68a12 12 0 0 0 12-12v-48a12 12 0 0 0-12-12m-76 124a4 4 0 0 1-4 4H72a4 4 0 0 1-4-4v-48a4 4 0 0 1 4-4h68Zm0-124H72a4 4 0 0 1-4-4V40a4 4 0 0 1 4-4h64a4 4 0 0 1 4 4Zm80 60a4 4 0 0 1-4 4h-68v-56h68a4 4 0 0 1 4 4Z"></svg:path>`,
})
export class PhReplitLogoThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
