import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinJavascriptTestIcon],svg[catppuccin-javascript-test-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#eed49f" stroke-linecap="round" stroke-linejoin="round" d="M12 7.5H4.98M9.5.5l6 6m-4.78-4.75l-8.49 8.48a2.5 2.5 0 1 0 3.54 3.54l8.48-8.49M15.5 12c-.33-.33-.83-.5-1.5-.5c-1 0-1.5.5-1.5 1s.5 1 1.5 1s1.5.5 1.5 1s-.5 1-1.5 1c-.67 0-1.17-.17-1.5-.5m-2-3.5v3a1 1 0 1 1-2 0"></svg:path>`,
})
export class CatppuccinJavascriptTestIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
