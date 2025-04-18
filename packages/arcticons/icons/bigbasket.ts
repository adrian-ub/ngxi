import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsBigbasketIcon],svg[arcticons-bigbasket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4"></svg:path><svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M11.723 11.639v24.75m15.349-8.279c.01 4.414-3.397 8.006-7.62 8.033s-7.673-3.521-7.713-7.936c-.041-4.414 3.342-8.031 7.565-8.09S27 23.582 27.07 27.996M20.838 11.61v7.163"></svg:path><svg:path d="M25.613 20.953c3.284-1.377 6.996-.466 9.098 2.233c2.102 2.698 2.087 6.532-.039 9.396c-2.125 2.864-5.845 4.066-9.119 2.946"></svg:path></svg:g>`,
})
export class ArcticonsBigbasketIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
