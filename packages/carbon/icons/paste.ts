import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonPasteIcon],svg[carbon-paste-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26 20h-8.17l2.58-2.59L19 16l-5 5l5 5l1.41-1.41L17.83 22H26v8h2v-8a2 2 0 0 0-2-2"></svg:path><svg:path fill="currentColor" d="m23.71 9.29l-7-7A1 1 0 0 0 16 2H6a2 2 0 0 0-2 2v24a2 2 0 0 0 2 2h8v-2H6V4h8v6a2 2 0 0 0 2 2h6v2h2v-4a1 1 0 0 0-.29-.71M16 4.41L21.59 10H16Z"></svg:path>`,
})
export class CarbonPasteIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
