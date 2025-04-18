import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinApolloIcon],svg[catppuccin-apollo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#c6a0f6" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M12.5 3a.5.5 0 0 1-.5.5a.5.5 0 0 1-.5-.5a.5.5 0 0 1 .5-.5a.5.5 0 0 1 .5.5M5 10.5l3-6l3.01 6m-5-2H8"></svg:path><svg:path d="M14.12 5.81a6.5 6.5 0 0 1-3.1 7.94a6.5 6.5 0 0 1-8.3-1.95a6.5 6.5 0 0 1 .78-8.49a6.5 6.5 0 0 1 8.5-.43"></svg:path></svg:g>`,
})
export class CatppuccinApolloIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
