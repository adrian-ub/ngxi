import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirVialsSolidIcon],svg[iconoir-vials-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M21.75 21a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h18a.75.75 0 0 1 .75.75m-12-18A.75.75 0 0 0 9 2.25H5a.75.75 0 0 0-.75.75v13a2.75 2.75 0 1 0 5.5 0zm-1.5.75v7.5h-2.5v-7.5zM19.75 3a.75.75 0 0 0-.75-.75h-4a.75.75 0 0 0-.75.75v13a2.75 2.75 0 1 0 5.5 0zm-1.5.75v7.5h-2.5v-7.5z" clip-rule="evenodd"></svg:path>`,
})
export class IconoirVialsSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
