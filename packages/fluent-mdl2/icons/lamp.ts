import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2LampIcon],svg[fluent-mdl2-lamp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1024 1920h384v128H512v-128h384V896H231L530 0h860l299 896h-409v192q0 26-19 45t-45 19t-45-19t-19-45V896h-128zM409 768h1102l-213-640H622z"></svg:path>`,
})
export class FluentMdl2LampIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
