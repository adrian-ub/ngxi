import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconFileZipIcon],svg[codicon-file-zip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.5 1h11l.5.5v5l-.15.35l-.85.86v6.79l-.5.5h-10l-.5-.5v-13zM6 2H5v2h1zm0 12h4V7.68l-.85-.85L9 6.47V2H7v2.5l-.5.5H6v1H5V5h-.5L4 4.5V2H3v12h2v-1h1zm0-2v1h1v-1zm0-1v1H5v-1zm0-1h1v1H6zm0-1v1H5V9zm0-1h1v1H6zm0-1v1H5V7zm0 0h1V6H6zm6.15.15l.85-.86V2h-3v4.27l.85.85l.15.35V14h1V7.5z" clip-rule="evenodd"></svg:path>`,
})
export class CodiconFileZipIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
