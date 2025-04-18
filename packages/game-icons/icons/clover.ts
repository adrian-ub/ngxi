import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gameIconsCloverIcon],svg[game-icons-clover-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 16c-24 0-72 24-72 48s48 24 72 96c24-72 72-72 72-96s-48-48-72-48M64 184c-24 0-48 48-48 72s24 72 48 72s24-48 96-72c-72-24-72-72-96-72m384 0c-24 0-24 48-96 72c72 24 72 72 96 72s48-48 48-72s-24-72-48-72m-189.906.03A72 72 0 0 0 184 256a72 72 0 0 0 144 0a72 72 0 0 0-69.906-71.97M256 352c-24 72-72 72-72 96s48 48 72 48s72-24 72-48s-48-24-72-96"></svg:path>`,
})
export class GameIconsCloverIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
