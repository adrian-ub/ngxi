import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagCd4x3Icon],svg[flag-cd-4x3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#007fff" d="M0 0h640v480H0z"></svg:path><svg:path fill="#f7d618" d="M28.8 96H96l20.8-67.2L137.6 96h67.2l-54.4 41.6l20.8 67.2l-54.4-41.6l-54.4 41.6l20.8-67.2zM600 0L0 360v120h40l600-360V0z"></svg:path><svg:path fill="#ce1021" d="M640 0L0 384v96L640 96z"></svg:path>`,
})
export class FlagCd4x3Icon {
  readonly viewBox = input("0 0 640 480")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
