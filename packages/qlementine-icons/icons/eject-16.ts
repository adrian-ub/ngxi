import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[qlementineIconsEject16Icon],svg[qlementine-icons-eject-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.1 2.49a1.5 1.5 0 0 0-2.21 0L1.4 8.48C.516 9.446 1.198 11 2.5 11h11c1.31 0 1.99-1.56 1.1-2.52zm-1.47.68a.5.5 0 0 1 .736 0l5.5 5.99a.502.502 0 0 1-.368.84h-11a.502.502 0 0 1-.368-.84l5.49-5.99z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M1.5 13a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1z"></svg:path>`,
})
export class QlementineIconsEject16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
