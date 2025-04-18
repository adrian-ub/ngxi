import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconMapFilledIcon],svg[codicon-map-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 5.5V13l3.5-2.187v-7.5zm7.5 7.188v-7.5l-3-1.875v7.5zm1 0v-7.5L14 3v7.5z"></svg:path>`,
})
export class CodiconMapFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
