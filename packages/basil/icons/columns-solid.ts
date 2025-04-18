import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[basilColumnsSolidIcon],svg[basil-columns-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.542 19.267a74.67 74.67 0 0 0 0-14.534c-.043-.435-.34-.8-.753-.935a8.258 8.258 0 0 0-5.078 0c-.412.134-.71.5-.753.935a74.662 74.662 0 0 0 0 14.534c.043.434.341.8.753.934a8.259 8.259 0 0 0 5.078 0c.412-.133.71-.5.753-.934Zm9.5 0a74.67 74.67 0 0 0 0-14.534c-.043-.435-.34-.8-.753-.935a8.258 8.258 0 0 0-5.078 0c-.412.134-.71.5-.753.935a74.67 74.67 0 0 0 0 14.534c.043.434.341.8.753.934a8.259 8.259 0 0 0 5.078 0c.412-.133.71-.5.753-.934Z"></svg:path>`,
})
export class BasilColumnsSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
