import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBowlFilledIcon],svg[tabler-bowl-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 7a2 2 0 0 1 2 2v.5c0 1.694-2.247 5.49-3.983 6.983l-.017.013V17a2 2 0 0 1-1.85 1.995L16 19H8a2 2 0 0 1-2-2v-.496l-.065-.053c-1.76-1.496-3.794-4.965-3.928-6.77L2 9.5V9a2 2 0 0 1 2-2z"></svg:path>`,
})
export class TablerBowlFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
