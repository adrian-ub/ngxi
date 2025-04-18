import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixMapAlt3FilledIcon],svg[ix-map-alt-3-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M234.663 448V323.605L64 253.312L64.01 448zm213.328-36.544l-170.663-70.293V448H448zm0-46.123L448 64H191.997v195.904zm-298.66-123.008V64H64.009L64 207.189zm170.662-135.658c31.419 0 56.889 25.47 56.889 56.889c0 10.363-2.763 20.073-7.613 28.447c-4.849 8.374-49.276 85.33-49.276 85.33s-44.427-76.956-49.276-85.33s-7.613-18.084-7.613-28.447c0-31.419 25.47-56.889 56.889-56.889m24.385 56.889c0 13.465-10.916 24.381-24.381 24.381s-24.381-10.916-24.381-24.381s10.916-24.381 24.381-24.381s24.381 10.915 24.381 24.381" clip-rule="evenodd"></svg:path>`,
})
export class IxMapAlt3FilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
