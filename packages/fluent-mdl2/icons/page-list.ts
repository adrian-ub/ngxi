import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2PageListIcon],svg[fluent-mdl2-page-list-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1792 0v1792H256V0zm-128 128H384v1536h1280zM640 896H512V768h128zm896 0H768V768h768zm-896 384H512v-128h128zm896 0H768v-128h768zM640 512H512V384h128zm896 0H768V384h768z"></svg:path>`,
})
export class FluentMdl2PageListIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
