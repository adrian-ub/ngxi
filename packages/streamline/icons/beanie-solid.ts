import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineBeanieSolidIcon],svg[streamline-beanie-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 1a1 1 0 0 0-2 0v.566a6 6 0 0 0-5 5.916v2.02h12v-2.02a6 6 0 0 0-5-5.916zm-6.923 9.751h11.846c.595 0 1.077.482 1.077 1.077v1.077c0 .595-.482 1.077-1.077 1.077H1.077A1.077 1.077 0 0 1 0 12.905v-1.077c0-.595.482-1.077 1.077-1.077" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineBeanieSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
