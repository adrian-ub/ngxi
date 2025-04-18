import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[rivetIconsGridVerticalIcon],svg[rivet-icons-grid-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 1v2H3V1zm4 2V1H7v2zm4 0V1h-2v2zm0 4V5h-2v2zM9 5v2H7V5zM5 7V5H3v2zm8 2v2h-2V9zm0 6v-2h-2v2zM9 9v2H7V9zm0 6v-2H7v2zM5 9v2H3V9zm0 6v-2H3v2z"></svg:path>`,
})
export class RivetIconsGridVerticalIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
