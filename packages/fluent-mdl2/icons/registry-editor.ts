import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2RegistryEditorIcon],svg[fluent-mdl2-registry-editor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1152 896h512v1152H0V384h1152zM640 512v384h384V512zm384 896v-384H640v384zM128 512v384h384V512zm0 512v384h384v-384zm384 896v-384H128v384zm512 0v-384H640v384zm512 0v-384h-384v384zm-384-512h384v-384h-384zm832-960l-384 384l-384-384l384-384zm-384-239l-239 239l239 239l239-239z"></svg:path>`,
})
export class FluentMdl2RegistryEditorIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
