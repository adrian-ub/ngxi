import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2FiltersSolidIcon],svg[fluent-mdl2-filters-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M384 1024h1280v128q0 27-10 50t-27 40t-41 28t-50 10h-256v512q0 53-20 99t-55 82t-81 55t-100 20q-53 0-99-20t-82-55t-55-81t-20-100v-512H512q-27 0-50-10t-40-27t-28-41t-10-50zM1600 0q40 0 75 15t61 41t41 61t15 75v64h-34q-17 0-33 2t-30 8t-22 19t-9 35v576H384V256q0-53 20-99t55-82t81-55T640 0z"></svg:path>`,
})
export class FluentMdl2FiltersSolidIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
