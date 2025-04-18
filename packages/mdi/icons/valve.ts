import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiValveIcon],svg[mdi-valve-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 22H2V2h2m18 0h-2v20h2M17.24 5.34l-4 4a3 3 0 0 0-4 4l-4 4l1.42 1.42l4-4a3 3 0 0 0 4-4l4-4Z"></svg:path>`,
})
export class MdiValveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
