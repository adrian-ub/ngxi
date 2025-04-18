import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[etNotebookIcon],svg[et-notebook-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M23.5 32c.869 0 1.5-.631 1.5-1.5v-28c0-.869-.631-1.5-1.5-1.5h-20C2.631 1 2 1.631 2 2.5v1.167a.5.5 0 0 0 1 0V2.5c0-.313.187-.5.5-.5h4.562v29H3.5c-.313 0-.5-.187-.5-.5v-.917a.5.5 0 0 0-1 0v.917c0 .869.631 1.5 1.5 1.5zM9 2h14.5c.313 0 .5.187.5.5v28c0 .313-.187.5-.5.5H9zm18 27.5v-26a.5.5 0 0 0-1 0v26a.5.5 0 0 0 1 0"></svg:path><svg:path d="M.5 11h4a.5.5 0 0 0 0-1h-4a.5.5 0 0 0 0 1m0-4h4a.5.5 0 0 0 0-1h-4a.5.5 0 0 0 0 1m0 8h4a.5.5 0 0 0 0-1h-4a.5.5 0 0 0 0 1m0 8h4a.5.5 0 0 0 0-1h-4a.5.5 0 0 0 0 1m0-4h4a.5.5 0 0 0 0-1h-4a.5.5 0 0 0 0 1m0 8h4a.5.5 0 0 0 0-1h-4a.5.5 0 0 0 0 1"></svg:path></svg:g>`,
})
export class EtNotebookIcon {
  readonly viewBox = input("0 0 27 32")
  readonly width = input("0.85em")
  readonly height = input("1em")
}
