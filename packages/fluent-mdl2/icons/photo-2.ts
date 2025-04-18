import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2Photo2Icon],svg[fluent-mdl2-photo-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2048 256v1536H0V256zM128 384v677l448-447l640 640l256-256l448 447V384zm0 1280h1317L576 794l-448 449zm1792 0v-37l-448-449l-166 166l321 320zm-320-896q-26 0-45-19t-19-45t19-45t45-19t45 19t19 45t-19 45t-45 19"></svg:path>`,
})
export class FluentMdl2Photo2Icon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
