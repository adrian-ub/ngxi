import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiVolumeLowIcon],svg[mynaui-volume-low-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 3v18c-3.5 0-6.1-4.58-6.1-4.58s-3.9.586-3.9-1V8.505c0-1.586 3.9-1 3.9-1S9.5 3 13 3m3 13a5.657 5.657 0 0 0 0-8"></svg:path>`,
})
export class MynauiVolumeLowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
