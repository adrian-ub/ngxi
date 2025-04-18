import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiWifiStrength1LockOpenIcon],svg[mdi-wifi-strength-1-lock-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 13c.74 0 1.5.12 2.22.31c0 .07-.02.13-.02.19v1.24c-.7.6-1.2 1.5-1.2 2.46v3.04l-1 1.26C7.88 16.37 4.39 12.06.365 7C3.69 4.41 7.78 3 12 3c4.2 0 8.31 1.41 11.64 4L21.5 9.69a5.2 5.2 0 0 0-2.08-.65l1.28-1.59C18.08 5.86 15.06 5 12 5s-6.1.85-8.74 2.44l5.12 6.36c1.12-.52 2.36-.8 3.62-.8m9.8 3h-4.3v-2.5c0-.8.7-1.3 1.5-1.3s1.5.5 1.5 1.3v.5h1.3v-.5c0-1.4-1.4-2.5-2.8-2.5s-2.8 1.1-2.8 2.5V16c-.6 0-1.2.6-1.2 1.2v3.5c0 .7.6 1.3 1.2 1.3h5.5c.7 0 1.3-.6 1.3-1.2v-3.5c0-.7-.6-1.3-1.2-1.3"></svg:path>`,
})
export class MdiWifiStrength1LockOpenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
