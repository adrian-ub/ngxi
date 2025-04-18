import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiPlayIcon],svg[mdi-play-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 5.14v14l11-7z"></svg:path>`,
})
export class MdiPlayIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
