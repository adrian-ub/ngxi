import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlinePlayStoreIcon],svg[streamline-play-store-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M.859 11.981V1.741c0-.672.79-1.098 1.434-.771L12.37 6.09c.662.336.662 1.207 0 1.543l-10.077 5.12c-.644.327-1.434-.099-1.434-.772M9.23 9.23l-8.1-8.101m8.1 3.364l-8.1 8.1"></svg:path>`,
})
export class StreamlinePlayStoreIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
