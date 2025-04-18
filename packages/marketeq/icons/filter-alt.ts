import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqFilterAltIcon],svg[marketeq-filter-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#306CFE" d="M39.583 20.833V6.25m-29.166 0v29.167zM25 14.583V43.75zm14.583 14.584V43.75z"></svg:path><svg:path stroke="#344054" d="M10.417 35.417a4.166 4.166 0 1 0 0 8.332a4.166 4.166 0 0 0 0-8.332M25 6.25a4.167 4.167 0 1 0 0 8.333a4.167 4.167 0 0 0 0-8.333m14.583 14.583a4.167 4.167 0 1 0 0 8.334a4.167 4.167 0 0 0 0-8.334"></svg:path></svg:g>`,
})
export class MarketeqFilterAltIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
