import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBrandXFilledIcon],svg[tabler-brand-x-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.267 3a1 1 0 0 1 .73.317l.076.092l4.274 5.828l5.946-5.944a1 1 0 0 1 1.497 1.32l-.083.094l-6.163 6.162l6.262 8.54a1 1 0 0 1-.697 1.585L20 21h-4.267a1 1 0 0 1-.73-.317l-.076-.092l-4.276-5.829l-5.944 5.945a1 1 0 0 1-1.497-1.32l.083-.094l6.161-6.163l-6.26-8.539a1 1 0 0 1 .697-1.585L4 3z"></svg:path>`,
})
export class TablerBrandXFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
