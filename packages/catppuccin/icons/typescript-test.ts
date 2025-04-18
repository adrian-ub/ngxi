import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinTypescriptTestIcon],svg[catppuccin-typescript-test-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#8aadf4" stroke-linecap="round" stroke-linejoin="round" d="M15.5 12c-.33-.33-.83-.5-1.5-.5c-1 0-1.5.5-1.5 1s.5 1 1.5 1s1.5.5 1.5 1s-.5 1-1.5 1c-.67 0-1.17-.17-1.5-.5m-3-3.5v4m-1.5-4h3m-.28-9.75l-8.49 8.48a2.5 2.5 0 1 0 3.54 3.54l.77-.77m3.59-3.59l.59-.59l1.17-1.18l2.36-2.36M9.5.5l6 6m-3.5 1H4.98"></svg:path>`,
})
export class CatppuccinTypescriptTestIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
