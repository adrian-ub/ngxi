import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkKnifeForkIcon],svg[icon-park-knife-fork-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M14 4V44"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M8 5V15C8 20 14 20 14 20C14 20 20 20 20 15V5"></svg:path><svg:path fill="#2F88FF" d="M30 12C30 4 38 4 38 4V21H30V12Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M38 21H30V12C30 4 38 4 38 4V21ZM38 21V44"></svg:path></svg:g>`,
})
export class IconParkKnifeForkIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
