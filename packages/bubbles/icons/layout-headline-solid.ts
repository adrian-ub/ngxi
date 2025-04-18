import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesLayoutHeadlineSolidIcon],svg[bubbles-layout-headline-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 .498h16v3.667H0zm0 5.667h16V9.83H0zm0 5.667h16v3.666H0z"></svg:path>`,
})
export class BubblesLayoutHeadlineSolidIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
