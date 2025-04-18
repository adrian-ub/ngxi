import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirPocketSolidIcon],svg[iconoir-pocket-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 20.75A9.75 9.75 0 0 0 21.75 11V6A2.75 2.75 0 0 0 19 3.25H5A2.75 2.75 0 0 0 2.25 6v5A9.75 9.75 0 0 0 12 20.75M8.53 9.47a.75.75 0 0 0-1.06 1.06l4 4a.75.75 0 0 0 1.06 0l4-4a.75.75 0 1 0-1.06-1.06L12 12.94z" clip-rule="evenodd"></svg:path>`,
})
export class IconoirPocketSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
