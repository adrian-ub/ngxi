import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignBifurcateIcon],svg[tdesign-bifurcate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 4a1 1 0 1 0 0 2a1 1 0 0 0 0-2M3 5a3 3 0 1 1 4.086 2.797c.128.667.412 1.506.934 2.256C8.752 11.103 9.958 12 12 12s3.248-.897 3.98-1.947a6 6 0 0 0 .934-2.256a3.001 3.001 0 1 1 2.019.055a8 8 0 0 1-1.312 3.345c-.934 1.34-2.421 2.478-4.621 2.744v2.23a3.001 3.001 0 1 1-2 0v-2.23c-2.2-.266-3.687-1.405-4.62-2.744a8 8 0 0 1-1.313-3.345A3 3 0 0 1 3 5m15-1a1 1 0 1 0 0 2a1 1 0 0 0 0-2m-6 14a1 1 0 1 0 0 2a1 1 0 0 0 0-2"></svg:path>`,
})
export class TdesignBifurcateIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
