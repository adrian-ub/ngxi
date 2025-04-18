import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[biSlashSquareFillIcon],svg[bi-slash-square-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm9.354 5.354l-6 6a.5.5 0 0 1-.708-.708l6-6a.5.5 0 0 1 .708.708"></svg:path>`,
})
export class BiSlashSquareFillIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
