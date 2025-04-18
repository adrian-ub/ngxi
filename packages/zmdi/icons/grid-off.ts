import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiGridOffIcon],svg[zmdi-grid-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M171 61h-31L97 19h330q17 0 29.5 12.5T469 61v330l-42-43v-31h-31l-43-42h74v-86h-86v74l-42-43v-31h-31l-43-42h74V61h-86v74l-42-43zm170 0v86h86V61zM27 3l458 458l-27 27l-43-43H85q-17 0-29.5-12.5T43 403V73L0 30zm186 241v31h31zM85 116v31h31zm86 287v-86H85v86zm0-128v-74l-12-12H85v86zm128 128v-74l-12-12h-74v86zm42 0h31l-31-31z"></svg:path>`,
})
export class ZmdiGridOffIcon {
  readonly viewBox = input("0 0 488 488")
  readonly width = input("1em")
  readonly height = input("1em")
}
