import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightEncryptedAddOutlineIcon],svg[material-symbols-light-encrypted-add-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 20.962q-3.014-.895-5.007-3.651T5 11.1V5.692l7-2.615l7 2.615v5.688q0 .133-.012.28h-1q.006-.147.009-.28q.003-.132.003-.28V6.375l-6-2.23l-6 2.23V11.1q0 3.025 1.7 5.5t4.3 3.3zM17 21v-3h-3v-1h3v-3h1v3h3v1h-3v3zm-6.02-6.5h2.04l-.556-3.09q.442-.154.73-.545q.287-.392.287-.865q0-.61-.436-1.046t-1.047-.435t-1.045.435T10.519 10q0 .473.288.865q.287.39.73.544z"></svg:path>`,
})
export class MaterialSymbolsLightEncryptedAddOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
