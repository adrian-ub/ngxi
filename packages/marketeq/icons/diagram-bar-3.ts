import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqDiagramBar3Icon],svg[marketeq-diagram-bar-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M35.417 18.75v12.5m-8.334-8.333v8.333zm-8.333-8.334V31.25z"></svg:path><svg:path stroke="#306CFE" d="M10.417 6.25v37.5M6.25 39.583h37.5z"></svg:path></svg:g>`,
})
export class MarketeqDiagramBar3Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
