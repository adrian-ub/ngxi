import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsPoopIcon],svg[hugeicons-poop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M19.2 14c1.13.836 1.8 1.874 1.8 3c0 2.761-4.03 5-9 5s-9-2.239-9-5c0-1.126.67-2.164 1.8-3m7.959-6c-1.536-.884-2.83-1.214-3.862-1.203m0 0C7.009 6.818 6 7.983 6 9c0 1.657 2.594 3 5.793 3s5.078-1.518 5.793-3c1.448-3-.965-6.5-6.276-7c1.127 1.365 2.221 4.235-2.413 4.797"></svg:path><svg:path d="M17.014 10c1.821.721 2.986 1.826 2.986 3.066C20 15.239 16.418 17 12 17s-8-1.761-8-3.934c0-1.107.93-2.107 2.426-2.822"></svg:path></svg:g>`,
})
export class HugeiconsPoopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
