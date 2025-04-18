import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightNoDrinksOutlineIcon],svg[material-symbols-light-no-drinks-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 20.5v-1h4.5v-6.573l-8.754-8.76l.708-.713l17.092 17.092l-.713.714l-7.333-7.333V19.5H17v1zm7.07-9.242l-.695-.683L15.66 8h-4.854l-.994-1h6.738l1.8-2H7.811l-1-1h12.843v1zm-1.99-1.983"></svg:path>`,
})
export class MaterialSymbolsLightNoDrinksOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
