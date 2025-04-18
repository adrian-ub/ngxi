import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamPlugIcon],svg[jam-plug-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 9v3.5A3.5 3.5 0 0 0 5.5 16h1a3.5 3.5 0 0 0 3.5-3.5V9zm6-2V1a1 1 0 1 1 2 0v6a2 2 0 0 1 2 2v3.5a5.5 5.5 0 0 1-4.155 5.334A1.5 1.5 0 0 1 6.5 20h-1a1.5 1.5 0 0 1-1.345-2.166A5.5 5.5 0 0 1 0 12.5V9a2 2 0 0 1 2-2V1a1 1 0 1 1 2 0v6z"></svg:path>`,
})
export class JamPlugIcon {
  readonly viewBox = input("-6 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
