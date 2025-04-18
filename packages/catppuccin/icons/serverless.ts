import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinServerlessIcon],svg[catppuccin-serverless-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#ed8796" stroke-linecap="round" stroke-linejoin="round" d="m6.5 11.5l-1 2h9v-2zm2-4l-1 2h7v-2zm2-4l-1 2h5v-2zm-8 10l1-2h-2v2zm2-4l1-2h-4v2zm2-4l1-2h-6v2z"></svg:path>`,
})
export class CatppuccinServerlessIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
