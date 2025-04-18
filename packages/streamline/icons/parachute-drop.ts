import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineParachuteDropIcon],svg[streamline-parachute-drop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.235 7h-4.5a1 1 0 0 0-1 1v4.5a1 1 0 0 0 1 1h4.5a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1m-2.25 4.258h1m4.5-7.243a.5.5 0 0 0 .44-.27a.47.47 0 0 0 0-.51a6.86 6.86 0 0 0-5.94-2.72a6.86 6.86 0 0 0-5.91 2.72a.47.47 0 0 0 0 .51a.5.5 0 0 0 .41.27zm-5.5 2.993v-3m-2.5 3l-2.5-3m7.5 3l2.5-3"></svg:path>`,
})
export class StreamlineParachuteDropIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
