import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirWindowTabsSolidIcon],svg[iconoir-window-tabs-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.222 3.25c-1.661 0-2.972 1.38-2.972 3.036v11.428c0 1.657 1.31 3.036 2.972 3.036h15.556c1.661 0 2.972-1.38 2.972-3.036V6.286c0-1.657-1.31-3.036-2.972-3.036zM9.75 5.5a.75.75 0 0 0-1.5 0V8c0 .414.336.75.75.75h11.25a.75.75 0 0 0 0-1.5h-4V5.5a.75.75 0 0 0-1.5 0v1.75h-5z" clip-rule="evenodd"></svg:path>`,
})
export class IconoirWindowTabsSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
