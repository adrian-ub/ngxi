import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightDeployedCodeIcon],svg[material-symbols-light-deployed-code-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.192 20.687l-6.384-3.68q-.38-.217-.593-.59Q4 16.044 4 15.61V8.391q0-.435.215-.808q.214-.373.593-.59l6.384-3.68q.38-.217.808-.217t.808.217l6.384 3.68q.38.216.594.59q.214.373.214.808v7.219q0 .434-.214.807q-.215.373-.594.59l-6.384 3.68q-.38.217-.808.217t-.808-.217m.308-8.4v7.427l.23.132q.135.077.27.077t.27-.077l.23-.132v-7.427L19 8.523v-.242q0-.097-.048-.193t-.144-.153l-.383-.221L12 11.427L5.575 7.714l-.383.22q-.096.058-.144.155Q5 8.185 5 8.28v.242z"></svg:path>`,
})
export class MaterialSymbolsLightDeployedCodeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
