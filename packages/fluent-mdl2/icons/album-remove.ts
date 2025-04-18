import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2AlbumRemoveIcon],svg[fluent-mdl2-album-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1856 256q40 0 75 15t61 41t41 61t15 75v768h-128V448q0-26-19-45t-45-19H384v1280h832v128H0V256zM256 384H128v1280h128zm1280 640H768V640h768zm-128-256H896v128h512zm586 685l-226 227l226 226l-90 90l-226-226l-225 224l-90-90l224-224l-224-225l90-90l225 224l226-226z"></svg:path>`,
})
export class FluentMdl2AlbumRemoveIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
