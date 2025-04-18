import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconGraphIcon],svg[codicon-graph-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.5 14H15v-1H2V0H1v13.5zM3 11.5v-8l.5-.5h2l.5.5v8l-.5.5h-2zm2-.5V4H4v7zm6-9.5v10l.5.5h2l.5-.5v-10l-.5-.5h-2zm2 .5v9h-1V2zm-6 9.5v-6l.5-.5h2l.5.5v6l-.5.5h-2zm2-.5V6H8v5z" clip-rule="evenodd"></svg:path>`,
})
export class CodiconGraphIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
