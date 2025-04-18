import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bytesizeFullscreenExitIcon],svg[bytesize-fullscreen-exit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 12h8V4m8 0v8h8M4 20h8v8m16-8h-8v8"></svg:path>`,
})
export class BytesizeFullscreenExitIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
