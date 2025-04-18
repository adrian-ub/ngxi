import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laBufferIcon],svg[la-buffer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 5c-.156 0-.312.03-.455.09l-12.35 5.695c-.26.12-.26.308 0 .428l12.35 5.697a1.18 1.18 0 0 0 .91 0l12.35-5.697c.26-.12.26-.308 0-.428L16.455 5.09A1.2 1.2 0 0 0 16 5m0 2.082L24.492 11L16 14.918L7.508 11zM4.84 14.447l-1.645.823c-.26.13-.26.33 0 .46l12.35 6.172a1.1 1.1 0 0 0 .91 0l12.35-6.172c.26-.13.26-.33 0-.46l-1.645-.823l-10.705 5.35a1.1 1.1 0 0 1-.91 0zm0 5l-1.645.823c-.26.13-.26.33 0 .46l12.35 6.172a1.1 1.1 0 0 0 .91 0l12.35-6.172c.26-.13.26-.33 0-.46l-1.645-.823l-10.705 5.35a1.1 1.1 0 0 1-.91 0z"></svg:path>`,
})
export class LaBufferIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
