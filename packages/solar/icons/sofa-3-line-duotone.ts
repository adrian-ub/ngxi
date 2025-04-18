import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarSofa3LineDuotoneIcon],svg[solar-sofa-3-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M4 18h16a2 2 0 1 0 0-4H4a2 2 0 1 0 0 4Z"></svg:path><svg:path d="m4.5 14l-.075-.299c-1.087-4.347-1.63-6.52-.56-8.023q.102-.142.216-.275C5.278 4 7.519 4 12 4s6.722 0 7.92 1.403q.112.133.214.275c1.07 1.502.527 3.676-.56 8.023L19.5 14" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M20 20v-2M4 20v-2" opacity=".5"></svg:path></svg:g>`,
})
export class SolarSofa3LineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
