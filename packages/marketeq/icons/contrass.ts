import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqContrassIcon],svg[marketeq-contrass-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M33.333 25A8.333 8.333 0 0 1 25 33.333V16.667A8.334 8.334 0 0 1 33.333 25"></svg:path><svg:path stroke="#306CFE" d="m44.146 23.521l-4.563-4.562V12.5a2.083 2.083 0 0 0-2.083-2.083h-6.458l-4.563-4.563a2.084 2.084 0 0 0-2.958 0l-4.563 4.563H12.5a2.083 2.083 0 0 0-2.083 2.083v6.459L5.854 23.52a2.08 2.08 0 0 0 0 2.958l4.563 4.563V37.5a2.084 2.084 0 0 0 2.083 2.083h6.458l4.563 4.563a2.084 2.084 0 0 0 2.958 0l4.563-4.563H37.5a2.083 2.083 0 0 0 2.083-2.083v-6.458l4.563-4.563a2.084 2.084 0 0 0 0-2.958"></svg:path></svg:g>`,
})
export class MarketeqContrassIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
