import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsNetworkToolsLibraryIcon],svg[arcticons-network-tools-library-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M37.523 31.216H10.477V13.895c0-.615.499-1.113 1.114-1.113h24.818c.615 0 1.114.498 1.114 1.113zm0 0l5.977 4.002h-39l5.977-4.002"></svg:path><svg:circle cx="24" cy="21.999" r="1.902" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M31.754 23.404h-2.747a5.2 5.2 0 0 1-1.783 2.68c-.887.71-2.005 1.12-3.224 1.12s-2.337-.41-3.223-1.12m-4.531-5.494h2.747a5.13 5.13 0 0 1 1.783-2.67c.887-.708 2.005-1.13 3.224-1.13s2.337.422 3.224 1.13"></svg:path>`,
})
export class ArcticonsNetworkToolsLibraryIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
