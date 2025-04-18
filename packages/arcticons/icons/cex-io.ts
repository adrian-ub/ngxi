import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsCexIoIcon],svg[arcticons-cex-io-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M42.5 9.611V5.5H24C13.783 5.5 5.5 13.783 5.5 24S13.783 42.5 24 42.5h18.5v-4.111H24c-7.947 0-14.389-6.442-14.389-14.39S16.053 9.612 24 9.612z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m32.333 30.167l-4.111 4.111H24c-5.677 0-10.278-4.601-10.278-10.278S18.323 13.722 24 13.722h4.222l4.111 4.111H24a6.167 6.167 0 1 0 0 12.334z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M36.444 26.056L38.5 24l-2.056-2.055H24a2.056 2.056 0 1 0 0 4.111zm-4.222-12.334l4.111 4.111H42.5v-4.111zm4.111 16.445l-4.111 4.111H42.5v-4.111z"></svg:path>`,
})
export class ArcticonsCexIoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
