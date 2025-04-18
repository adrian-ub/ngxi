import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqMoreVerticalIcon],svg[marketeq-more-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#344054" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M25 12.396v.208m0 12.292v.208m0 12.292v.208"></svg:path>`,
})
export class MarketeqMoreVerticalIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
