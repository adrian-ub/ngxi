import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phCraneThinIcon],svg[ph-crane-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M226.06 20.57a4 4 0 0 0-3.94-.1L103 84H32a12 12 0 0 0-12 12v104a12 12 0 0 0 12 12h88a12 12 0 0 0 12-12v-32a4 4 0 0 0-.17-1.15L108.77 90L220 30.67V160a4 4 0 0 1-4 4h-16a4 4 0 0 1-4-4v-8a4 4 0 0 0-8 0v8a12 12 0 0 0 12 12h16a12 12 0 0 0 12-12V24a4 4 0 0 0-1.94-3.43M101 92l21.6 72H60V92Zm-69 0h20v72H28V96a4 4 0 0 1 4-4m88 112H32a4 4 0 0 1-4-4v-28h96v28a4 4 0 0 1-4 4"></svg:path>`,
})
export class PhCraneThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
