import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineClosetSolidIcon],svg[streamline-closet-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.375 0H2.5A1.5 1.5 0 0 0 1 1.5v11A1.5 1.5 0 0 0 2.5 14h3.875zm1.25 14H11.5a1.5 1.5 0 0 0 1.5-1.5v-11A1.5 1.5 0 0 0 11.5 0H7.625zM9.5 5.837c.345 0 .625.28.625.625v1.076a.625.625 0 1 1-1.25 0V6.462c0-.346.28-.625.625-.625m-4.375.625a.625.625 0 1 0-1.25 0v1.076a.625.625 0 1 0 1.25 0z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineClosetSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
