import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circumSaveDown2Icon],svg[circum-save-down-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.437 20.948H5.563a2.37 2.37 0 0 1-2.5-2.21v-11a2.37 2.37 0 0 1 2.5-2.211h.462a.5.5 0 0 1 0 1h-.462a1.38 1.38 0 0 0-1.5 1.211v11a1.38 1.38 0 0 0 1.5 1.21h12.874a1.38 1.38 0 0 0 1.5-1.21v-11a1.38 1.38 0 0 0-1.5-1.211h-.462a.5.5 0 0 1 0-1h.462a2.37 2.37 0 0 1 2.5 2.211v11a2.37 2.37 0 0 1-2.5 2.21"></svg:path><svg:path fill="currentColor" d="m15.355 10.592l-3 3a.5.5 0 0 1-.35.15a.5.5 0 0 1-.36-.15l-3-3a.5.5 0 0 1 .71-.71l2.14 2.139V3.552a.51.51 0 0 1 .5-.5a.5.5 0 0 1 .5.5v8.49l2.15-2.16a.5.5 0 0 1 .71.71"></svg:path>`,
})
export class CircumSaveDown2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
