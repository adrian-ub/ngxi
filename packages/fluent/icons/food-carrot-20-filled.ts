import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentFoodCarrot20FilledIcon],svg[fluent-food-carrot-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.853 2.854a.5.5 0 0 0-.707-.708L14 5.292V2.5a.5.5 0 1 0-1 0v2.876c-1.579-.784-3.588-.338-4.64 1.207l-6.086 8.946c-.428.63-.346 1.47.196 2.007c.55.544 1.415.619 2.053.178l8.93-6.184A3.57 3.57 0 0 0 14.629 7h2.87a.5.5 0 1 0 0-1h-2.793z"></svg:path>`,
})
export class FluentFoodCarrot20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
