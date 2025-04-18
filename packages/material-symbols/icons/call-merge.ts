import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsCallMergeIcon],svg[material-symbols-call-merge-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.4 20L6 18.6l5-5V6.875L8.425 9.45L7 8.025l5-5l5.025 5.025L15.6 9.475l-2.6-2.6V14.4zm9.2.025l-3.2-3.175l1.425-1.425l3.175 3.2z"></svg:path>`,
})
export class MaterialSymbolsCallMergeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
