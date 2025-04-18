import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiEmoticonIcon],svg[mdi-emoticon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.47 2 2 6.5 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m3.5 6A1.5 1.5 0 0 1 17 9.5a1.5 1.5 0 0 1-1.5 1.5A1.5 1.5 0 0 1 14 9.5A1.5 1.5 0 0 1 15.5 8m-7 0A1.5 1.5 0 0 1 10 9.5A1.5 1.5 0 0 1 8.5 11A1.5 1.5 0 0 1 7 9.5A1.5 1.5 0 0 1 8.5 8m3.5 9.5c-2.33 0-4.31-1.46-5.11-3.5h10.22c-.81 2.04-2.78 3.5-5.11 3.5"></svg:path>`,
})
export class MdiEmoticonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
