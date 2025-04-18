import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkLiqueurIcon],svg[icon-park-liqueur-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" d="M22.9994 31L7.41097 13L38.5879 13L22.9994 31Z"></svg:path><svg:line x1="23" x2="23" y1="32" y2="42" stroke="#000" stroke-linejoin="round"></svg:line><svg:line x1="17" x2="29" y1="44" y2="44" stroke="#000"></svg:line><svg:line x1="16" x2="30" y1="23" y2="23" stroke="#fff" stroke-linejoin="round"></svg:line><svg:path stroke="#000" stroke-linejoin="round" d="M35 18H38C41.3137 18 44 15.3137 44 12C44 8.68629 41.3137 6 38 6C34.6863 6 32 8.68629 32 12C32 12.3407 32.0284 12.6748 32.083 13"></svg:path><svg:path stroke="#000" stroke-linejoin="round" d="M10.9993 17.1436L19.5352 27"></svg:path><svg:path stroke="#000" stroke-linejoin="round" d="M35 17.1435L26.2105 27.2927"></svg:path></svg:g>`,
})
export class IconParkLiqueurIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
