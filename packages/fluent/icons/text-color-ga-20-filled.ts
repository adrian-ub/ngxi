import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextColorGa20FilledIcon],svg[fluent-text-color-ga-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 2.5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-3h1.5a.5.5 0 0 0 0-1H13v-3ZM5.5 3a.5.5 0 0 0 0 1h3.494c-.018.578-.096 1.142-.427 1.712c-.423.73-1.31 1.547-3.253 2.324a.5.5 0 1 0 .372.928c2.058-.823 3.17-1.756 3.747-2.75C10 5.233 10 4.268 10 3.528V3.5a.5.5 0 0 0-.5-.5h-4ZM3 13.5A1.5 1.5 0 0 1 4.5 12h11a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 3 16.5v-3Z"></svg:path>`,
})
export class FluentTextColorGa20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
