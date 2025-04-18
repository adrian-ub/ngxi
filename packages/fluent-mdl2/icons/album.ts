import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2AlbumIcon],svg[fluent-mdl2-album-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1856 256q40 0 75 15t61 41t41 61t15 75v1152q0 40-15 75t-41 61t-61 41t-75 15H0V256zM128 1664h128V384H128zM1920 448q0-26-19-45t-45-19H384v1280h1472q26 0 45-19t19-45zM768 640h768v384H768zm128 256h512V768H896z"></svg:path>`,
})
export class FluentMdl2AlbumIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
