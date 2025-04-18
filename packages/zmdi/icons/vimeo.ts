import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiVimeoIcon],svg[zmdi-vimeo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M276 100q-15 0-32 7Q276 4 364 6q66 2 62 86q-2 63-87 172q-87 114-147 114q-37 0-63-70q-18-66-34-127q-19-69-41-69q-5 0-34 20L0 106q33-29 62-56q42-36 63-38q50-5 62 68q12 80 17 99q14 65 32 65q13 0 40-42.5t29-64.5q3-37-29-37"></svg:path>`,
})
export class ZmdiVimeoIcon {
  readonly viewBox = input("0 0 432 384")
  readonly width = input("1.13em")
  readonly height = input("1em")
}
