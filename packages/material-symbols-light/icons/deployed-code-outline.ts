import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightDeployedCodeOutlineIcon],svg[material-symbols-light-deployed-code-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.5 19.714v-7.427L5 8.523v7.08q0 .155.077.29t.23.23zm1 0l6.192-3.591q.154-.096.231-.23q.077-.135.077-.29v-7.08l-6.5 3.764zm-.5-8.287l6.425-3.713l-6.117-3.541q-.154-.096-.308-.096t-.308.096l-6.117 3.54zm-7.192 5.58q-.38-.217-.593-.59Q4 16.044 4 15.61V8.391q0-.435.215-.808q.214-.373.593-.59l6.384-3.68q.38-.217.808-.217t.808.217l6.384 3.68q.38.216.594.59q.214.373.214.808v7.219q0 .434-.214.807q-.215.373-.594.59l-6.384 3.68q-.38.217-.808.217t-.808-.217zM12 12"></svg:path>`,
})
export class MaterialSymbolsLightDeployedCodeOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
