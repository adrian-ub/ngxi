import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vscodeIconsFolderTypeNugetIcon],svg[vscode-icons-folder-type-nuget-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:radialgradient id="vscodeIconsFolderTypeNuget0" cx="304.438" cy="-324.056" r="8.902" gradientTransform="matrix(1.711 .138 .094 -1.169 -468.316 -398.712)" gradientUnits="userSpaceOnUse"><svg:stop offset="0" stop-color="#0663b4"></svg:stop><svg:stop offset="1" stop-color="#16adff" stop-opacity=".685"></svg:stop></svg:radialgradient><svg:lineargradient id="vscodeIconsFolderTypeNuget1" x1="262.559" x2="262.559" y1="-662.427" y2="-659.102" gradientTransform="matrix(1 0 0 -1 -250.518 -647.956)" gradientUnits="userSpaceOnUse"><svg:stop offset="0" stop-color="#047fc7"></svg:stop><svg:stop offset="1" stop-color="#11abe8"></svg:stop></svg:lineargradient></svg:defs><svg:path fill="#558dbf" d="M27.5 5.5h-9.3l-2.1 4.2H4.4v16.8h25.2v-21Zm0 4.2h-8.2l1.1-2.1h7.1Z"></svg:path><svg:rect width="17.792" height="17.792" x="13.208" y="13.188" fill="#c7ebf1" rx="5.775" ry="5.775"></svg:rect><svg:rect width="17.092" height="16.917" x="13.558" y="13.713" fill="url(#vscodeIconsFolderTypeNuget0)" opacity=".823" rx="5.47" ry="5.47"></svg:rect><svg:rect width="14.57" height="14.57" x="14.528" y="15.138" fill="#016fd2" rx="4.565" ry="4.565"></svg:rect><svg:path fill="#5fffe6" d="M30.629 18.763a5.467 5.467 0 0 0-5.449-5.051h-6.151a5.47 5.47 0 0 0-5.47 5.47v5.976c0 .124.01.245.018.367q.586.032 1.181.032a21.9 21.9 0 0 0 15.871-6.794" opacity=".173"></svg:path><svg:path fill="#fff" d="M28.375 25.2a3.733 3.733 0 1 1-7.467 0a3.733 3.733 0 1 1 7.467 0m-8.458-6.821a2.158 2.158 0 0 1-4.317 0a2.158 2.158 0 0 1 4.317 0"></svg:path><svg:path fill="#cbedf2" fill-opacity=".925" d="M14.083 12.663a2.042 2.042 0 1 1-4.083 0a2.042 2.042 0 1 1 4.083 0"></svg:path><svg:path fill="url(#vscodeIconsFolderTypeNuget1)" d="M13.617 12.663a1.575 1.575 0 0 1-3.15 0a1.575 1.575 0 0 1 3.15 0"></svg:path>`,
})
export class VscodeIconsFolderTypeNugetIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
