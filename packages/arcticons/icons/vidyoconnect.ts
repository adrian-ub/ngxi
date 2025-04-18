import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsVidyoconnectIcon],svg[arcticons-vidyoconnect-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.093 12.093h23.815v23.815H12.093z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17.063 17.063h13.875v13.875H17.063zm6.937 0v-4.97M30.938 24h4.969M24 30.938v4.969M17.063 24h-4.97"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M22.844 35.907V42.5H9.5a4 4 0 0 1-4-4V25.156h6.593m0-2.312H5.5V9.5a4 4 0 0 1 4-4h13.344v6.593m2.312 0V5.5H38.5a4 4 0 0 1 4 4v13.344h-6.593m0 2.312H42.5V38.5a4 4 0 0 1-4 4H25.156v-6.593M21.5 21.5h5v5h-5z"></svg:path>`,
})
export class ArcticonsVidyoconnectIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
