import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faSolidSdCardIcon],svg[fa-solid-sd-card-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M320 0H128L0 128v320c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64M160 160h-48V64h48zm80 0h-48V64h48zm80 0h-48V64h48z"></svg:path>`,
})
export class FaSolidSdCardIcon {
  readonly viewBox = input("0 0 384 512")
  readonly width = input("0.75em")
  readonly height = input("1em")
}
