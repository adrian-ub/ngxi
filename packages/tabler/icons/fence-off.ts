import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerFenceOffIcon],svg[tabler-fence-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 12H4v4h12m4 0v-4h-4M6 16v4h4v-4m0-4v-2m0-4L8 4M6 6v6m8 4v4h4v-2m0-6V6l-2-2l-2 2v4M3 3l18 18"></svg:path>`,
})
export class TablerFenceOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
