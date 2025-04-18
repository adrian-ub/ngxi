import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqKey11Icon],svg[marketeq-key-11-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M25 33.333h4.167M25 18.75v25zm0 22.917h4.167z"></svg:path><svg:path stroke="#306CFE" d="M25 6.25a4.167 4.167 0 1 1 0 8.333a4.167 4.167 0 0 1 0-8.333m-8.333 12.5a4.166 4.166 0 1 0 8.332 0a4.166 4.166 0 0 0-8.332 0m12.5-4.167a4.167 4.167 0 1 0 0 8.334a4.167 4.167 0 0 0 0-8.334"></svg:path></svg:g>`,
})
export class MarketeqKey11Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
