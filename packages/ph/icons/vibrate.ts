import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phVibrateIcon],svg[ph-vibrate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M160 32H96a24 24 0 0 0-24 24v144a24 24 0 0 0 24 24h64a24 24 0 0 0 24-24V56a24 24 0 0 0-24-24m8 168a8 8 0 0 1-8 8H96a8 8 0 0 1-8-8V56a8 8 0 0 1 8-8h64a8 8 0 0 1 8 8Zm48-112v80a8 8 0 0 1-16 0V88a8 8 0 0 1 16 0m32 16v48a8 8 0 0 1-16 0v-48a8 8 0 0 1 16 0M56 88v80a8 8 0 0 1-16 0V88a8 8 0 0 1 16 0m-32 16v48a8 8 0 0 1-16 0v-48a8 8 0 0 1 16 0"></svg:path>`,
})
export class PhVibrateIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
