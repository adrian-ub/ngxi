import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2AutoFillTemplateIcon],svg[fluent-mdl2-auto-fill-template-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2048 256v640H0V256zm-128 128H128v384h1792zM0 1024h2048v640H0zm128 512h1792v-384H128zm1408-896H256V512h1280zM256 1280h640v128H256z"></svg:path>`,
})
export class FluentMdl2AutoFillTemplateIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
