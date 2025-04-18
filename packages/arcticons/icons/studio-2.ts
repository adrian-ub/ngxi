import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsStudio2Icon],svg[arcticons-studio-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M35.296 4.5L12.704 16.936v9.948l22.592-12.435zm0 16.616L12.704 33.551V43.5l22.592-12.436zm-9.065-1.677l9.065 1.677M24.23 27.207l-11.526-.323"></svg:path>`,
})
export class ArcticonsStudio2Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
