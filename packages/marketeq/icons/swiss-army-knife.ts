import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqSwissArmyKnifeIcon],svg[marketeq-swiss-army-knife-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="m22.917 23.896l4.875 4.896a8.334 8.334 0 0 0 11.791 0L22.917 12.125q.015.188 0 .375z"></svg:path><svg:path stroke="#306CFE" d="M22.917 12.5a6.25 6.25 0 1 0-12.5 0v25a6.25 6.25 0 1 0 12.5 0z"></svg:path></svg:g>`,
})
export class MarketeqSwissArmyKnifeIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
