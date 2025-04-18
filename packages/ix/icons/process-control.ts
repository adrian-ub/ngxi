import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixProcessControlIcon],svg[ix-process-control-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M448 448V64H64v384zM106.667 106.667h298.666v298.666H106.667zM192 149.333h-64V192h64zm32 0h64V192h-64zm160 0h-64V192h64zm-256 85.334h64v42.666h-64zm160 0h-64v42.666h64zm32 0h64v42.666h-64zM192 320h-64v42.667h64zm32 0h64v42.667h-64zm160 0h-64v42.667h64z" clip-rule="evenodd"></svg:path>`,
})
export class IxProcessControlIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
