import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxDoorOpenIcon],svg[bx-door-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.385 21.788a1 1 0 0 0 .857.182l8-2A1 1 0 0 0 20 19V5a1 1 0 0 0-.758-.97l-8-2A1.003 1.003 0 0 0 10 3v1H6a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h4v1c0 .308.142.599.385.788M12 4.281l6 1.5v12.438l-6 1.5zM7 18V6h3v12z"></svg:path><svg:path fill="currentColor" d="M14.242 13.159c.446-.112.758-.512.758-.971v-.377a1 1 0 1 0-2 .001v.377a1 1 0 0 0 1.242.97"></svg:path>`,
})
export class BxDoorOpenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
