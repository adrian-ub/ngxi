import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignPalace3Icon],svg[tdesign-palace-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13.004 2.002l-.002 1.081A6 6 0 0 1 18 9h4v13H2V9h4a6 6 0 0 1 5.002-5.917l.002-1.085zM12 5a4 4 0 0 0-4 4v2H4v9h4v-1.646a6.43 6.43 0 0 1 3.553-5.748l.447-.224l.447.224A6.43 6.43 0 0 1 16 18.354V20h4v-9h-4V9a4 4 0 0 0-4-4m2 15v-1.646a4.43 4.43 0 0 0-2-3.702a4.43 4.43 0 0 0-2 3.702V20zM10.998 7.998h2.004v2.004h-2.004z"></svg:path>`,
})
export class TdesignPalace3Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
