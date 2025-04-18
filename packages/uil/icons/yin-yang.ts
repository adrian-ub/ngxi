import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uilYinYangIcon],svg[uil-yin-yang-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 15.5a1 1 0 1 0 1 1a1 1 0 0 0-1-1M12 2a6 6 0 0 0-.562.029A9.993 9.993 0 0 0 12 22a6 6 0 0 0 .562-.028A9.993 9.993 0 0 0 12 2m0 18A7.989 7.989 0 0 1 6.71 6.015A5.484 5.484 0 0 0 12 13a3.5 3.5 0 0 1 0 7m5.29-2.015A5.484 5.484 0 0 0 12 11a3.5 3.5 0 0 1 0-7a7.989 7.989 0 0 1 5.29 13.985M12 6.5a1 1 0 1 0 1 1a1 1 0 0 0-1-1"></svg:path>`,
})
export class UilYinYangIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
