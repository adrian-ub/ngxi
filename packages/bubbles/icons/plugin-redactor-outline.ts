import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesPluginRedactorOutlineIcon],svg[bubbles-plugin-redactor-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="m18.784 8.584l3.713-3.713a1.5 1.5 0 0 0 0-2.12l-1.061-1.062a1.5 1.5 0 0 0-2.121 0L15.602 5.4m-6.364 6.366l6.364-6.364l3.182 3.182l-6.364 6.364zm13.259-6.895l1.06 1.061a1.5 1.5 0 0 1 0 2.121l-4.773 4.773z"></svg:path><svg:path d="M4.497 19.25H3.75a2.25 2.25 0 1 0 0 4.5H19.5m-8.671-7.21c-.878.877-4.242 1.06-4.242 1.06s.182-3.365 1.06-4.243a2.25 2.25 0 1 1 3.182 3.182"></svg:path></svg:g>`,
})
export class BubblesPluginRedactorOutlineIcon {
  readonly viewBox = input("0 0 25 25")
  readonly width = input("1em")
  readonly height = input("1em")
}
