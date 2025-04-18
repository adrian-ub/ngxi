import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[epWatchIcon],svg[ep-watch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 768a256 256 0 1 0 0-512a256 256 0 0 0 0 512m0 64a320 320 0 1 1 0-640a320 320 0 0 1 0 640"></svg:path><svg:path fill="currentColor" d="M480 352a32 32 0 0 1 32 32v160a32 32 0 0 1-64 0V384a32 32 0 0 1 32-32"></svg:path><svg:path fill="currentColor" d="M480 512h128q32 0 32 32t-32 32H480q-32 0-32-32t32-32m128-256V128H416v128h-64V64h320v192zM416 768v128h192V768h64v192H352V768z"></svg:path>`,
})
export class EpWatchIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
