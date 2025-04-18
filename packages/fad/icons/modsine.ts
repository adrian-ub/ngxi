import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fadModsineIcon],svg[fad-modsine-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M48 128c-1.955-29.248 19.364-64 37.364-64S121.5 77.843 121.5 128.5s19.136 80.5 49.136 80.5S224 168.875 224 128.5c-8.182 0-7.273-.752-16 0c0 32.35-20.455 64.45-37.364 64.45s-33.909-13.542-33.909-64.45S120.273 48 85.364 48S32 88.626 32 127.748c6 0 8.364.252 16 .252"></svg:path>`,
})
export class FadModsineIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
