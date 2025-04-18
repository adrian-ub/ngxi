import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiCogSolidIcon],svg[mynaui-cog-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.391 3.646a1.75 1.75 0 0 1 1.714-1.396h1.79a1.75 1.75 0 0 1 1.714 1.396a8.7 8.7 0 0 1 1.453.602a1.75 1.75 0 0 1 2.2.225l1.265 1.266a1.75 1.75 0 0 1 .225 2.199q.365.693.602 1.453a1.75 1.75 0 0 1 1.396 1.714v1.79a1.75 1.75 0 0 1-1.396 1.714q-.237.76-.602 1.453a1.75 1.75 0 0 1-.225 2.2l-1.266 1.265a1.75 1.75 0 0 1-2.199.225a8.7 8.7 0 0 1-1.453.602a1.75 1.75 0 0 1-1.714 1.396h-1.79a1.75 1.75 0 0 1-1.714-1.396a8.7 8.7 0 0 1-1.453-.602a1.75 1.75 0 0 1-2.2-.225l-1.265-1.266a1.75 1.75 0 0 1-.225-2.199a8.7 8.7 0 0 1-.602-1.453a1.75 1.75 0 0 1-1.396-1.714v-1.79a1.75 1.75 0 0 1 1.396-1.714a8.7 8.7 0 0 1 .602-1.453a1.75 1.75 0 0 1 .225-2.2l1.266-1.265a1.75 1.75 0 0 1 2.199-.225a8.7 8.7 0 0 1 1.453-.602M8.75 12a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 0 0-6.5 0"></svg:path>`,
})
export class MynauiCogSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
