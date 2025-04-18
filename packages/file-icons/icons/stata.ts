import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fileIconsStataIcon],svg[file-icons-stata-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M149.275 512H0V362.725h149.275zm0-330.638H0v149.276h149.275zm181.363 181.363H181.362V512h149.276zm0-181.363H181.362v149.276h149.276zm0-181.362H181.362v149.275h149.276zM512 0H362.725v149.275H512zm0 181.362H362.725v149.276H512z" clip-rule="evenodd"></svg:path>`,
})
export class FileIconsStataIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
