import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconCombineIcon],svg[codicon-combine-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m1.5 1l-.5.5v3l.5.5h3l.5-.5v-3L4.5 1zM2 4V2h2v2zm-.5 2l-.5.5v3l.5.5h3l.5-.5v-3L4.5 6zM2 9V7h2v2zm-1 2.5l.5-.5h3l.5.5v3l-.5.5h-3l-.5-.5zm1 .5v2h2v-2zm10.5-7l-.5.5v6l.5.5h3l.5-.5v-6l-.5-.5zM15 8h-2V6h2zm0 3h-2V9h2zM9.1 8H6v1h3.1l-1 1l.7.6l1.8-1.8v-.7L8.8 6.3l-.7.7z" clip-rule="evenodd"></svg:path>`,
})
export class CodiconCombineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
