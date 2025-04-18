import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vscodeIconsFileTypeLightEsphomeIcon],svg[vscode-icons-file-type-light-esphome-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#000" stroke-width="1.032" d="M26.54 8.146v-1.6a1.027 1.027 0 1 1 2.017 0v1.6m-5.4 0v-1.6a1.016 1.016 0 0 1 .989-1.027a.99.99 0 0 1 1.027.95v1.678m-5.441 0v-1.6a1.027 1.027 0 1 1 2.017 0v1.6m-5.4 0v-1.6a1.027 1.027 0 1 1 2.017 0v1.6m-5.441 0v-1.6a1.027 1.027 0 1 1 2.017 0v1.6m-5.441 0v-1.6a1.027 1.027 0 1 1 2.055 0v1.6M28.557 23.29v1.75a1.027 1.027 0 1 1-2.017 0v-1.75m-1.37 0v1.75a1.027 1.027 0 1 1-2.017 0v-1.75m-1.408 0v1.75a1.027 1.027 0 1 1-2.017 0v-1.75m-1.37 0v1.75a1.027 1.027 0 1 1-2.017 0v-1.75m-1.446 0v1.75a1.027 1.027 0 1 1-2.017 0v-1.75m-1.37.076v1.712a1.027 1.027 0 1 1-2.017 0v-1.712"></svg:path><svg:path fill="none" stroke="#000" stroke-width="1.032" d="M29.089 8.146H9a.38.38 0 0 0-.381.381v14.459a.41.41 0 0 0 .381.342h20.089a.41.41 0 0 0 .381-.381V8.488a.41.41 0 0 0-.381-.381Z"></svg:path><svg:path d="M22.354 15.452v-1.9h-.684v1.218l-2.587-2.587l-4.376 4.376h1.1v2.968h6.545v-2.972h1.1Z"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.032" d="M8.542 22.453H2.53v-1.522h4.528v-1.446H2.53v-1.522h4.528v-1.484H2.53v-1.484h4.528v-1.446H2.53V8.983"></svg:path>`,
})
export class VscodeIconsFileTypeLightEsphomeIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
