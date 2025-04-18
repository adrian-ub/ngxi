import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilVideogameIcon],svg[cil-videogame-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 360h480V120H16Zm32-208h416v176H48Z"></svg:path><svg:path fill="currentColor" d="M152 184h-32v40H80v32h40v40h32v-40h40v-32h-40zm184 72h32v32h-32zm64-64h32v32h-32z"></svg:path>`,
})
export class CilVideogameIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
