import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixDiskFilledIcon],svg[ix-disk-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M277.333 341.354v85.334h-64v-85.334zm51.499-256.021l97.834 97.835v243.498h-85.333V298.688H170.666v127.978H85.333V85.333zM341.333 128H170.666v106.666h170.667z"></svg:path>`,
})
export class IxDiskFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
