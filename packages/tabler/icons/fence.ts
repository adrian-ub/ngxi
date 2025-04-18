import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerFenceIcon],svg[tabler-fence-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 12v4h16v-4zm2 4v4h4v-4m0-4V6L8 4L6 6v6m8 4v4h4v-4m0-4V6l-2-2l-2 2v6"></svg:path>`,
})
export class TablerFenceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
