import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2DesignIcon],svg[fluent-mdl2-design-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1280 128h768v1920H0V37l1280 1280zM128 1920h1573L128 347zm1627-128l128 128h37V256h-512v128h256v128h-256v128h256v128h-256v128h384v128h-384v128h256v128h-256v128h256v128h-165l128 128h165v128zM384 1061l603 603H384zm128 310v165h165z"></svg:path>`,
})
export class FluentMdl2DesignIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
