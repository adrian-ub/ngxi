import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatOpenFileFolderIcon],svg[fluent-emoji-flat-open-file-folder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#FFB02E" d="M16.833 10H25c1.149 0 2 .851 2 2v1L14 23.5L2.61 28.23C2.22 27.63 2 26.774 2 26V8.08A2.08 2.08 0 0 1 4.08 6h6.675c.809 0 1.585.32 2.158.89l2.453 2.498c.39.387.918.612 1.467.612"></svg:path><svg:path fill="#FCD53F" d="M27.911 13H10.886a3.68 3.68 0 0 0-3.463 2.439C2.832 28.604 3.211 27.658 3.095 27.806a.55.55 0 0 1-.453.25a.35.35 0 0 1-.182-.054a3.78 3.78 0 0 0 3.585 2h17.952a2.03 2.03 0 0 0 1.939-1.453l3.962-12.835A2.086 2.086 0 0 0 27.911 13"></svg:path></svg:g>`,
})
export class FluentEmojiFlatOpenFileFolderIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
