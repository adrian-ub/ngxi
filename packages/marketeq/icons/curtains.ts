import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqCurtainsIcon],svg[marketeq-curtains-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M31.25 22.917v8.333"></svg:path><svg:path stroke="#306CFE" d="M8.333 22.917h33.334l-2.084-8.334H10.417zm0-8.334h33.334L39.583 6.25H10.417zm2.084 29.167h29.166V22.917H10.417zm33.333 0H6.25m37.5-37.5H6.25z"></svg:path></svg:g>`,
})
export class MarketeqCurtainsIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
