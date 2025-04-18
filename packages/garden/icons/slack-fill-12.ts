import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenSlackFill12Icon],svg[garden-slack-fill-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.435 0a1.304 1.304 0 1 0 0 2.609h1.304V1.304A1.304 1.304 0 0 0 4.435 0m3.13 0c-.72 0-1.304.584-1.304 1.304v3.13a1.304 1.304 0 1 0 2.609 0v-3.13C8.87.584 8.286 0 7.565 0m-6.26 3.13a1.304 1.304 0 1 0 0 2.61h3.13a1.304 1.304 0 1 0 0-2.61zm9.39 0c-.72 0-1.304.584-1.304 1.305v1.304h1.305a1.304 1.304 0 1 0 0-2.609zm-9.39 3.13a1.304 1.304 0 1 0 1.304 1.305V6.261H1.304zm3.13 0c-.72 0-1.305.585-1.305 1.305v3.13a1.304 1.304 0 1 0 2.61 0v-3.13c0-.72-.585-1.304-1.305-1.304zm3.13 0a1.304 1.304 0 1 0 0 2.61h3.13a1.304 1.304 0 1 0 0-2.61zM6.261 9.392v1.305A1.304 1.304 0 1 0 7.565 9.39H6.261z"></svg:path>`,
})
export class GardenSlackFill12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
