import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cbiCeilingLampIcon],svg[cbi-ceiling-lamp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 2v5.674a3 3 0 0 0-.5.228a3 3 0 0 0-1.49 2.424a10 7 0 0 0-2.01.611A10 7 0 0 0 2 17h20a10 7 0 0 0-5-6.063a10 7 0 0 0-2.008-.609A3 3 0 0 0 13.5 7.902a3 3 0 0 0-.5-.226V2zM9 19a3 3 0 0 0 1.5 2.598a3 3 0 0 0 3 0A3 3 0 0 0 15 19z"></svg:path>`,
})
export class CbiCeilingLampIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
