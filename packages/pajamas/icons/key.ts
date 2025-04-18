import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pajamasKeyIcon],svg[pajamas-key-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m6.358 8.763l.675-.674l-.325-.897A3.5 3.5 0 1 1 10 9.5H7.5v1H6.379l-.44.44l-1 1l-.439.439V13.5h-2v-.879zM6 15v-2l1-1h2v-1h1a5 5 0 1 0-4.703-3.297L1 12v3zm5-9a1 1 0 1 0 0-2a1 1 0 0 0 0 2" clip-rule="evenodd"></svg:path>`,
})
export class PajamasKeyIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
