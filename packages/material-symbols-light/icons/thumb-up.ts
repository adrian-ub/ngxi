import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightThumbUpIcon],svg[material-symbols-light-thumb-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.462 20H7.654V9l6.269-6.192l.443.442q.136.136.23.35t.092.392v.158L13.667 9h6.719q.627 0 1.12.494T22 10.616v1.23q0 .137-.028.298q-.028.162-.083.298l-2.731 6.474q-.206.461-.693.773q-.486.311-1.003.311M6.654 9v11H3V9z"></svg:path>`,
})
export class MaterialSymbolsLightThumbUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
