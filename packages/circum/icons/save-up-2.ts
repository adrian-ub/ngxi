import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circumSaveUp2Icon],svg[circum-save-up-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.437 20.937H5.563a2.37 2.37 0 0 1-2.5-2.211v-11a2.37 2.37 0 0 1 2.5-2.212h.462a.5.5 0 0 1 0 1h-.462a1.38 1.38 0 0 0-1.5 1.212v11a1.38 1.38 0 0 0 1.5 1.211h12.874a1.38 1.38 0 0 0 1.5-1.211v-11a1.38 1.38 0 0 0-1.5-1.212h-.462a.5.5 0 0 1 0-1h.462a2.37 2.37 0 0 1 2.5 2.212v11a2.37 2.37 0 0 1-2.5 2.211"></svg:path><svg:path fill="currentColor" d="m8.645 6.213l3-3a.5.5 0 0 1 .35-.15a.5.5 0 0 1 .36.15l3 3a.5.5 0 0 1-.71.71l-2.14-2.14v8.47a.51.51 0 0 1-.5.5a.5.5 0 0 1-.5-.5v-8.49l-2.15 2.16a.5.5 0 0 1-.71-.71"></svg:path>`,
})
export class CircumSaveUp2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
