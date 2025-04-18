import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineNecklaceSolidIcon],svg[streamline-necklace-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.248 1.58a5.948 5.948 0 1 1 7.002 9.597v-.427a1.75 1.75 0 0 0-.413-1.13a4.447 4.447 0 1 0-5.674 0a1.75 1.75 0 0 0-.413 1.13v.427a5.948 5.948 0 0 1-.502-9.597M8.8 10.35a.5.5 0 0 1 .2.4v1.5a.5.5 0 0 1-.2.4l-1.5 1.125a.5.5 0 0 1-.6 0L5.2 12.65a.5.5 0 0 1-.2-.4v-1.5a.5.5 0 0 1 .2-.4l1.5-1.125a.5.5 0 0 1 .6 0z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineNecklaceSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
