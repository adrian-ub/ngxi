import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phReplitLogoIcon],svg[ph-replit-logo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 88h-64V40a16 16 0 0 0-16-16H72a16 16 0 0 0-16 16v48a16 16 0 0 0 16 16h64v48H72a16 16 0 0 0-16 16v48a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-48h64a16 16 0 0 0 16-16v-48a16 16 0 0 0-16-16m-80 128H72v-48h64Zm0-176v48H72V40zm80 112h-64v-48h64Z"></svg:path>`,
})
export class PhReplitLogoIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
