import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignCastle2FilledIcon],svg[tdesign-castle-2-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 3.083V2h2v1.083c2.838.476 5 2.944 5 5.917a5 5 0 0 1 5 5v8H13v-7h-2v7H1v-8a5 5 0 0 1 5-5a6 6 0 0 1 5-5.917M21 14a3 3 0 0 0-3-3v9h3zM3 20h3v-9a3 3 0 0 0-3 3z"></svg:path>`,
})
export class TdesignCastle2FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
