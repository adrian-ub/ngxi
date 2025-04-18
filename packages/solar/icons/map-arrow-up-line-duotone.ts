import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarMapArrowUpLineDuotoneIcon],svg[solar-map-arrow-up-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M12 18.473c-.25 0-.5.061-.73.184l-5.903 3.152c-1.388.74-2.87-.81-2.202-2.306l7.362-16.51C10.824 2.33 11.412 2 12 2"></svg:path><svg:path d="M12 18.473c.25 0 .5.061.73.184l5.903 3.152c1.388.74 2.87-.81 2.202-2.306l-7.363-16.51C13.178 2.33 12.59 2 12 2" opacity=".5"></svg:path></svg:g>`,
})
export class SolarMapArrowUpLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
