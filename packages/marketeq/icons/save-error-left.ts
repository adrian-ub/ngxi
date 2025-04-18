import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqSaveErrorLeftIcon],svg[marketeq-save-error-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke="#344054" stroke-width="2" d="M41.667 27.083v6.25m-12.5-18.75h4.166z"></svg:path><svg:path stroke="#344054" stroke-width="3" d="M41.563 42.708h.208"></svg:path><svg:path stroke="#306CFE" stroke-width="2" d="M33.333 43.75H10.417a2.083 2.083 0 0 1-2.084-2.083V14.583l8.334-8.333h22.916a2.084 2.084 0 0 1 2.084 2.083V18.75"></svg:path><svg:path stroke="#306CFE" stroke-width="2" d="M33.333 31.25H16.667v12.5h16.666z"></svg:path></svg:g>`,
})
export class MarketeqSaveErrorLeftIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
