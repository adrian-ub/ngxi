import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentBuildingShop16FilledIcon],svg[fluent-building-shop-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 10v1h1v-1zM4.188 1.11l-2.5 2c-.166.132-.188.36-.188.56V5.5c0 .563.186 1.082.5 1.5v7.5a.5.5 0 0 0 .5.5H4V9.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V15h5.5a.5.5 0 0 0 .5-.5V7c.314-.418.5-.937.5-1.5V3.666c0-.2-.022-.424-.188-.556l-2.5-2A.5.5 0 0 0 11.5 1h-7a.5.5 0 0 0-.312.11M2.5 5.5V4h3v1.5a1.5 1.5 0 1 1-3 0m4 0V4h3v1.5a1.5 1.5 0 1 1-3 0m4 0V4h3v1.5a1.5 1.5 0 0 1-3 0M3.425 3l1.25-1H6.03l-.375 1zm3.297 0l.375-1H8.89l.333 1zm3.222-1h1.38l1.25 1h-2.297zM9 9.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5zM5 15h2v-5H5z"></svg:path>`,
})
export class FluentBuildingShop16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
