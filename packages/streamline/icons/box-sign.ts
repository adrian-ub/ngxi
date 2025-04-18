import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineBoxSignIcon],svg[streamline-box-sign-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M12.5.5h-11a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-11a1 1 0 0 0-1-1m-9 10h7"></svg:path><svg:path d="M5.5 8.5v-5l-2 2m5 3v-5l2 2"></svg:path></svg:g>`,
})
export class StreamlineBoxSignIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
