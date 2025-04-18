import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightTableViewIcon],svg[material-symbols-light-table-view-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 21h5.192v-4.384H6.385v2.769q0 .666.474 1.14Q7.334 21 8 21m6.192 0h5.193q.666 0 1.14-.475t.475-1.14v-2.77h-6.808zM3 17.23V4.617q0-.691.463-1.153T4.615 3h12.616v1H4.616q-.27 0-.443.173T4 4.616V17.23zm3.385-1.614h6.807v-4.424H6.385zm7.807 0H21v-4.424h-6.808zm-7.807-5.424H21V8q0-.666-.475-1.14q-.474-.476-1.14-.476H8q-.666 0-1.14.475q-.476.475-.476 1.141z"></svg:path>`,
})
export class MaterialSymbolsLightTableViewIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
