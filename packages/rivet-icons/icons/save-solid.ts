import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[rivetIconsSaveSolidIcon],svg[rivet-icons-save-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.414 1H1v14h14V5.586zM4 4h5v2H4zm8 5v4h-2v-2H6v2H4V9z"></svg:path>`,
})
export class RivetIconsSaveSolidIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
