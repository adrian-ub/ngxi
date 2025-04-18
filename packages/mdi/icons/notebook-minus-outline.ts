import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiNotebookMinusOutlineIcon],svg[mdi-notebook-minus-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 4v6l-2-2l-2 2V4H9v16h3.1c.1.7.4 1.4.7 2H7c-1.1 0-2-1-2-2v-1H3v-2h2v-4H3v-2h2V7H3V5h2V4c0-1.1.9-2 2-2h12c1 0 2 1 2 2v9.8c-.6-.4-1.3-.6-2-.7V4zM5 19h2v-2H5zm0-6h2v-2H5zm0-6h2V5H5zm9 11v2h8v-2z"></svg:path>`,
})
export class MdiNotebookMinusOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
