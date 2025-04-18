import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBrandPeanutIcon],svg[tabler-brand-peanut-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m15 16.25l-.816-.36l-.462-.196c-1.444-.592-2-.593-3.447 0l-.462.195l-.817.359a4.5 4.5 0 1 1 0-8.49v0l1.054.462l.434.178c1.292.507 1.863.48 3.237-.082l.462-.195l.817-.359a4.5 4.5 0 1 1 0 8.49"></svg:path>`,
})
export class TablerBrandPeanutIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
