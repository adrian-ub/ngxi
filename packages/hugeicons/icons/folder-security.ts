import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsFolderSecurityIcon],svg[hugeicons-folder-security-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 6.5h9.75c2.107 0 3.16 0 3.917.506a3 3 0 0 1 .827.827c.417.624.49 1.278.503 2.667M12 6.5l-.633-1.267c-.525-1.05-1.005-2.106-2.168-2.542C8.69 2.5 8.108 2.5 6.944 2.5c-1.816 0-2.724 0-3.406.38A3 3 0 0 0 2.38 4.038C2 4.72 2 5.628 2 7.444V10.5c0 4.714 0 7.071 1.464 8.535C4.822 20.394 6.944 20.493 11 20.5m6.5-8c-1.426 0-2.35.909-3.442 1.24c-.444.134-.666.202-.756.297s-.116.233-.169.51c-.563 2.969.668 5.713 3.605 6.78c.315.116.473.173.763.173s.447-.057.763-.172c2.936-1.068 4.166-3.812 3.603-6.78c-.053-.278-.08-.417-.169-.511s-.312-.163-.756-.297c-1.093-.331-2.018-1.24-3.443-1.24" color="currentColor"></svg:path>`,
})
export class HugeiconsFolderSecurityIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
