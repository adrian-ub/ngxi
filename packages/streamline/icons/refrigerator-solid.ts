import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineRefrigeratorSolidIcon],svg[streamline-refrigerator-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.5 0C2.682 0 2 .652 2 1.479v3.897l.029-.001H12V1.48A1.49 1.49 0 0 0 10.5 0zM2 11.265v-4.64h10v4.64c0 .74-.547 1.341-1.25 1.458v.52a.75.75 0 0 1-1.5 0v-.5h-4.5v.5a.75.75 0 0 1-1.5 0v-.52A1.485 1.485 0 0 1 2 11.265m3.041-8.656a.625.625 0 0 0-1.25 0v.5a.625.625 0 1 0 1.25 0z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineRefrigeratorSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
