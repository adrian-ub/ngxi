import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icomoonFreeSpinner8Icon],svg[icomoon-free-spinner8-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 16c-2.137 0-4.146-.832-5.657-2.343S0 10.137 0 8c0-1.513.425-2.986 1.228-4.261A8 8 0 0 1 4.421.844l.672 1.341a6.53 6.53 0 0 0-2.596 2.354A6.5 6.5 0 0 0 1.5 8c0 3.584 2.916 6.5 6.5 6.5s6.5-2.916 6.5-6.5c0-1.23-.345-2.426-.997-3.461a6.5 6.5 0 0 0-2.596-2.354l.672-1.341a8 8 0 0 1 3.193 2.895A8 8 0 0 1 16 8c0 2.137-.832 4.146-2.343 5.657S10.137 16 8 16"></svg:path>`,
})
export class IcomoonFreeSpinner8Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
