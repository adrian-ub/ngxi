import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonPlayCircleFillIcon],svg[iconamoon-play-circle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2m3 10a1 1 0 0 1-.5.866l-3 1.732a1 1 0 0 1-1.5-.866v-3.464a1 1 0 0 1 1.5-.866l3 1.732A1 1 0 0 1 15 12" clip-rule="evenodd"></svg:path>`,
})
export class IconamoonPlayCircleFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
