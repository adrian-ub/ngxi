import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uisPolygonIcon],svg[uis-polygon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21.9 11.5l-4.5-7.8c-.2-.3-.5-.5-.9-.5h-9c-.4 0-.7.2-.9.5l-4.5 7.8c-.2.3-.2.7 0 1l4.5 7.8c.2.3.5.5.9.5h9c.4 0 .7-.2.9-.5l4.5-7.8c.1-.3.1-.7 0-1"></svg:path>`,
})
export class UisPolygonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
