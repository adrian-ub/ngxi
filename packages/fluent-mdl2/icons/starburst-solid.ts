import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2StarburstSolidIcon],svg[fluent-mdl2-starburst-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m2048 1024l-384 256l96 480l-480-96l-256 384l-256-384l-480 96l96-480L0 1024l384-256l-96-480l480 96L1024 0l256 384l480-96l-96 480z"></svg:path>`,
})
export class FluentMdl2StarburstSolidIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
