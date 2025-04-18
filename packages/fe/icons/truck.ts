import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[feTruckIcon],svg[fe-truck-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10 18a3 3 0 0 1-6 0a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h11.001C16.105 4 17 4.895 17 5.999L20 6c2 0 2 2.896 2 4v6a2 2 0 0 1-2 2h-1a3 3 0 0 1-6 0zM4 6v9h11V6zm13 2v4h3V8zm-1 11a1 1 0 1 0 0-2a1 1 0 0 0 0 2m-9 0a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path>`,
})
export class FeTruckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
