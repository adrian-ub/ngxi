import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconPassFilledIcon],svg[codicon-pass-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14m-1.02-4.13h-.71L4 8.6l.71-.71l1.92 1.92l4.2-4.21l.71.71z" clip-rule="evenodd"></svg:path>`,
})
export class CodiconPassFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
