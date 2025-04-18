import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAenaIcon],svg[arcticons-aena-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.501 24.57c3.277 0 7.421.65 12.304 2.203c5.628 1.787 11.494 4.807 16.699 9.518c-3.577-4.6-5.923-9.457-7.5-14.057c-1.612-4.695-2.576-9.471-2.221-14.501c.004-.05.05-.097 0-.108v-.13c-.048-.014.018.011 0 .057c-1.707 3.875-4.752 7.32-8.188 10.185c-3.168 2.638-6.745 5.3-11.094 6.834Z"></svg:path><svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsAenaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
