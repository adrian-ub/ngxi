import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2CloneToDesktopIcon],svg[fluent-mdl2-clone-to-desktop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1024 1536h256v128H640v-128h256v-128H0V256h1920v768h-128V384H128v896h1408v128h-512zm1021 93l-317 317l-317-317l90-90l163 162v-549h128v549l163-162z"></svg:path>`,
})
export class FluentMdl2CloneToDesktopIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
