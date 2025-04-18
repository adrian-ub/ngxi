import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsHandGripIcon],svg[hugeicons-hand-grip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.342 19.816c1.718-1.24 2.644-4.196 3.118-6.468c.138-.66.197-1.995.953-2.298c.433-.174 1 .116 2.136.696c.873.445 1.31.668 1.422 1.138c.27 1.126-1.552 1.56-1.119 2.71c.483 1.284.155 1.659-.784 2.5c-.718.643.216 1.457-.2 2.165c-1.034 1.761-2.67 2.286-4.832 1.113c-.573-.311-1.562-.93-.694-1.556m19.316 0c-1.718-1.24-2.644-4.196-3.118-6.468c-.138-.66-.197-1.995-.953-2.298c-.433-.174-1 .116-2.136.696c-.873.445-1.31.668-1.422 1.138c-.269 1.121 1.548 1.57 1.12 2.71c-.484 1.284-.156 1.659.783 2.5c.718.643-.216 1.457.2 2.165c1.034 1.761 2.67 2.286 4.832 1.113c.573-.311 1.562-.93.694-1.556M14.5 4.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0m-6 7l.75-2.75m4.788-2.538l1.51 5.428" color="currentColor"></svg:path>`,
})
export class HugeiconsHandGripIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
