import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiEyeArrowLeftOutlineIcon],svg[mdi-eye-arrow-left-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5c.36 0 .72 0 1.08-.05a6 6 0 0 1-.08-.95c0-.36.04-.72.1-1.08c-.36.04-.73.08-1.1.08c-3.76 0-7.17-2.14-8.82-5.5a9.821 9.821 0 0 1 17.64 0c-.12.24-.26.45-.39.68c.66.16 1.29.43 1.86.82c.27-.5.51-1 .71-1.5c-1.73-4.39-6-7.5-11-7.5M12 9c-1.66 0-3 1.34-3 3s1.34 3 3 3s3-1.34 3-3s-1.34-3-3-3m6 6v2h4v2h-4v2l-3-3z"></svg:path>`,
})
export class MdiEyeArrowLeftOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
