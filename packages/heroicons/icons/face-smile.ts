import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[heroiconsFaceSmileIcon],svg[heroicons-face-smile-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0M9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75S9.168 9 9.375 9s.375.336.375.75m-.375 0h.008v.015h-.008zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75s.168-.75.375-.75s.375.336.375.75m-.375 0h.008v.015h-.008z"></svg:path>`,
})
export class HeroiconsFaceSmileIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
