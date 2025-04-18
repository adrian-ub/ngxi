import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2ShirtIcon],svg[fluent-mdl2-shirt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m2048 384l-128 512h-256v1024H384V896H128L0 384l768-256q0 53 20 99t55 82t81 55t100 20q53 0 99-20t82-55t55-81t20-100zm-153 84l-524-175q-24 50-60 90t-82 69t-97 44t-108 16q-56 0-108-15t-97-44t-81-69t-61-91L153 468l75 300h284v1024h1024V768h284z"></svg:path>`,
})
export class FluentMdl2ShirtIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
