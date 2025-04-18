import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flowbiteBeerMugEmptySolidIcon],svg[flowbite-beer-mug-empty-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M3.943 4.875A2 2 0 0 1 5.94 3h9.12a2 2 0 0 1 1.997 1.875l.008.125H20a1 1 0 0 1 1 1v3.86a5 5 0 0 1-2.226 4.16l-1.1.733l.078 1.247H3.248zm13.587 7.57l.134-.09A3 3 0 0 0 19 9.86V7h-1.81zM10 7a1 1 0 0 0-2 0v7a1 1 0 1 0 2 0zm3 0a1 1 0 1 0-2 0v7a1 1 0 1 0 2 0z" clip-rule="evenodd"></svg:path><svg:path d="m3.123 18l-.055.875A2 2 0 0 0 5.065 21h10.87a2 2 0 0 0 1.997-2.125L17.877 18z"></svg:path></svg:g>`,
})
export class FlowbiteBeerMugEmptySolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
