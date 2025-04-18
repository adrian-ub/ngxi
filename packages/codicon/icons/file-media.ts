import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconFileMediaIcon],svg[codicon-file-media-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 2h6v3.5l.5.5H12v1h1V4.8l-.15-.36l-3.28-3.3L9.22 1H1.5l-.5.5v13l.5.5H5v-1H2zm7 0l3 3H9zm5.5 6h-8l-.5.5v6l.5.5h8l.5-.5v-6zM14 9v4l-1.63-1.6h-.71l-1.16 1.17l-2.13-2.13h-.71L7 11.1V9zm-2.8 4.27l.81-.81L13.55 14h-1.62zM7 14v-1.49l1-1L10.52 14zm5.5-3.5a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1" clip-rule="evenodd"></svg:path>`,
})
export class CodiconFileMediaIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
