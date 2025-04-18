import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerPhotoUpIcon],svg[tabler-photo-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M15 8h.01M12.5 21H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v6.5"></svg:path><svg:path d="m3 16l5-5c.928-.893 2.072-.893 3 0l3.5 3.5"></svg:path><svg:path d="m14 14l1-1c.679-.653 1.473-.829 2.214-.526M19 22v-6m3 3l-3-3l-3 3"></svg:path></svg:g>`,
})
export class TablerPhotoUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
