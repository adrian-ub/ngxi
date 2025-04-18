import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignTranslateIcon],svg[tdesign-translate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 5a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3v6H8V8.5H4V11H2zm2 1.5h4V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1zm8-3h6a3 3 0 0 1 3 3V9h-2V6.5a1 1 0 0 0-1-1h-6zm6 8V13h4v2h-1.062a7.97 7.97 0 0 1-2.19 4.563A6 6 0 0 0 21 20h1v2h-1a7.96 7.96 0 0 1-4-1.07A7.96 7.96 0 0 1 13 22h-1v-2h1c.796 0 1.556-.155 2.251-.437a8 8 0 0 1-1.48-2.134l-.43-.903l1.807-.858l.429.903A6 6 0 0 0 17 18.472A6 6 0 0 0 18.917 15H12v-2h4v-1.5zM6 13v6a1 1 0 0 0 1 1h2.5v2H7a3 3 0 0 1-3-3v-6z"></svg:path>`,
})
export class TdesignTranslateIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
